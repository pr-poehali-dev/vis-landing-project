import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def handler(event: dict, context) -> dict:
    '''Отправка заявок с сайта на email'''
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', '')
        phone = body.get('phone', '')
        email = body.get('email', '')
        product = body.get('product', '')
        volume = body.get('volume', '')
        
        if not name or not phone:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Имя и телефон обязательны'}),
                'isBase64Encoded': False
            }
        
        smtp_host = os.environ.get('SMTP_HOST')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        email_to = os.environ.get('EMAIL_TO')
        
        if not all([smtp_host, smtp_user, smtp_password, email_to]):
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'SMTP настройки не заполнены'}),
                'isBase64Encoded': False
            }
        
        product_names = {
            'pressure-free': 'Трубы безнапорные',
            'pressure': 'Трубы напорные',
            'slate': 'Шифер',
            'volnacolor': 'Волнаколор'
        }
        product_name = product_names.get(product, product)
        
        msg = MIMEMultipart()
        msg['From'] = smtp_user
        msg['To'] = email_to
        msg['Subject'] = f'Новая заявка с сайта ВостокИнвестСталь'
        
        html_body = f'''
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2 style="color: #1E40AF;">Новая заявка с сайта</h2>
                <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Имя:</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">{name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Телефон:</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">{phone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Email:</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">{email or 'Не указан'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Продукция:</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">{product_name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Объем:</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">{volume or 'Не указан'}</td>
                    </tr>
                </table>
            </body>
        </html>
        '''
        
        msg.attach(MIMEText(html_body, 'html'))
        
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True, 'message': 'Заявка отправлена'}),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }
