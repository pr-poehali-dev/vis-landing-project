import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Index = () => {
  const [selectedDiameter, setSelectedDiameter] = useState<string>('all');
  const [selectedPressureDiameter, setSelectedPressureDiameter] = useState<string>('all');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    volume: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в течение 2 часов.');
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const pressureFreePipes = [
    { diameter: '100', length: '3950', image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop' },
    { diameter: '150', length: '3950', image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop' },
    { diameter: '200', length: '3950', image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop' },
    { diameter: '300', length: '3950', image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop' },
    { diameter: '400', length: '3950', image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop' },
    { diameter: '500', length: '3950', image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop' },
  ];

  const pressurePipes = [
    { diameter: '100', length: '3950', image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop' },
    { diameter: '150', length: '3950', image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop' },
    { diameter: '200', length: '3950', image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop' },
    { diameter: '300', length: '3950', image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop' },
    { diameter: '400', length: '3950', image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop' },
    { diameter: '500', length: '3950', image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop' },
  ];

  const slates = [
    { type: 'Волнистый 8-волновой', size: '1750×1130', colors: ['Серый', 'Красный', 'Зеленый', 'Коричневый'], image: 'https://images.unsplash.com/photo-1632207691143-643e2753a2c4?w=400&h=300&fit=crop' },
    { type: 'Плоский 8мм', size: '3000×1500', colors: ['Серый'], image: 'https://images.unsplash.com/photo-1632207691143-643e2753a2c4?w=400&h=300&fit=crop' },
    { type: 'Плоский 10мм', size: '3000×1500', colors: ['Серый'], image: 'https://images.unsplash.com/photo-1632207691143-643e2753a2c4?w=400&h=300&fit=crop' },
  ];

  const filteredPressureFreePipes = selectedDiameter === 'all' ? pressureFreePipes : pressureFreePipes.filter(p => p.diameter === selectedDiameter);
  const filteredPressurePipes = selectedPressureDiameter === 'all' ? pressurePipes : pressurePipes.filter(p => p.diameter === selectedPressureDiameter);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              ВостокИнвестСталь
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('products')} className="text-secondary hover:text-primary transition-colors">О продукции</button>
              <button onClick={() => scrollToSection('advantages')} className="text-secondary hover:text-primary transition-colors">Преимущества</button>
              <button onClick={() => scrollToSection('pipes')} className="text-secondary hover:text-primary transition-colors">Трубы</button>
              <button onClick={() => scrollToSection('slate')} className="text-secondary hover:text-primary transition-colors">Шифер</button>
              <button onClick={() => scrollToSection('contacts')} className="text-secondary hover:text-primary transition-colors">Контакты</button>
            </nav>
            <Button onClick={() => scrollToSection('request-form')} className="bg-primary hover:bg-primary/90">
              <Icon name="FileText" size={18} className="mr-2" />
              Запросить КП
            </Button>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-gray-900 to-gray-700 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&h=800&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Хризотилцементные трубы и шифер напрямую от производителя
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Поставка асбестоцементных изделий по Дальнему Востоку. ГОСТ 1839-80, гарантия 25 лет, отгрузка от 1 дня
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Button onClick={() => scrollToSection('request-form')} size="lg" className="bg-accent hover:bg-accent/90">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать прайс
              </Button>
              <Button onClick={() => scrollToSection('request-form')} size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Получить консультацию
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🏭</div>
                <span className="text-sm">От производителя</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-3xl">📋</div>
                <span className="text-sm">Сертификаты</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-3xl">🚚</div>
                <span className="text-sm">Наличие на складе</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-3xl">💰</div>
                <span className="text-sm">Оптовые цены</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">О продукции</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Pipette" size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Безнапорные трубы</h3>
              <p className="text-muted-foreground">Для канализации, дренажа и технических сетей. Диаметры от 100 до 500 мм.</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Droplet" size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Напорные трубы</h3>
              <p className="text-muted-foreground">Для водоснабжения под давлением. Высокая прочность и надежность.</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Home" size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Шифер волнистый и плоский</h3>
              <p className="text-muted-foreground">Для кровли, ограждений. Различные цвета и размеры в наличии.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Технические характеристики труб</h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Диаметр, мм</th>
                  <th className="px-6 py-4 text-left">Длина, мм</th>
                  <th className="px-6 py-4 text-left">Толщина стенки, мм</th>
                  <th className="px-6 py-4 text-left">Рабочее давление, МПа</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { d: '100', l: '3950', t: '9', p: '0.6-0.9' },
                  { d: '150', l: '3950', t: '11', p: '0.6-0.9' },
                  { d: '200', l: '3950', t: '14', p: '0.6-0.9' },
                  { d: '300', l: '3950', t: '18', p: '0.6' },
                  { d: '400', l: '3950', t: '24', p: '0.6' },
                  { d: '500', l: '3950', t: '30', p: '0.6' },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4">{row.d}</td>
                    <td className="px-6 py-4">{row.l}</td>
                    <td className="px-6 py-4">{row.t}</td>
                    <td className="px-6 py-4">{row.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Button onClick={() => scrollToSection('request-form')} variant="outline" size="lg">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать полный каталог
            </Button>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Преимущества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '⚙️', title: 'Точное соответствие ГОСТ', text: 'Все изделия сертифицированы и соответствуют стандартам' },
              { icon: '🛡️', title: 'Стойкость к коррозии', text: 'Не подвержены ржавчине и химическому воздействию' },
              { icon: '🔥', title: 'Негорючесть', text: 'Полная пожарная безопасность материала' },
              { icon: '💪', title: 'Высокая механическая прочность', text: 'Выдерживают значительные нагрузки' },
              { icon: '⏱️', title: 'Срок службы от 50 лет', text: 'Долговечность и надежность на десятилетия' },
              { icon: '🚛', title: 'Доставка по региону', text: 'Быстрая отгрузка по Приморью и Дальнему Востоку' },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pipes" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Каталог труб</h2>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Трубы безнапорные</h3>
            <div className="mb-6">
              <Select value={selectedDiameter} onValueChange={setSelectedDiameter}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Выберите диаметр" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все диаметры</SelectItem>
                  <SelectItem value="100">100 мм</SelectItem>
                  <SelectItem value="150">150 мм</SelectItem>
                  <SelectItem value="200">200 мм</SelectItem>
                  <SelectItem value="300">300 мм</SelectItem>
                  <SelectItem value="400">400 мм</SelectItem>
                  <SelectItem value="500">500 мм</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {filteredPressureFreePipes.map((pipe, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={pipe.image} alt={`Труба ${pipe.diameter}мм`} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Труба безнапорная {pipe.diameter} мм</h4>
                    <p className="text-muted-foreground mb-4">Длина: {pipe.length} мм</p>
                    <Button onClick={() => scrollToSection('request-form')} className="w-full">Запросить цену</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Трубы напорные</h3>
            <div className="mb-6">
              <Select value={selectedPressureDiameter} onValueChange={setSelectedPressureDiameter}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Выберите диаметр" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все диаметры</SelectItem>
                  <SelectItem value="100">100 мм</SelectItem>
                  <SelectItem value="150">150 мм</SelectItem>
                  <SelectItem value="200">200 мм</SelectItem>
                  <SelectItem value="300">300 мм</SelectItem>
                  <SelectItem value="400">400 мм</SelectItem>
                  <SelectItem value="500">500 мм</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {filteredPressurePipes.map((pipe, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={pipe.image} alt={`Труба ${pipe.diameter}мм`} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Труба напорная {pipe.diameter} мм</h4>
                    <p className="text-muted-foreground mb-4">Длина: {pipe.length} мм</p>
                    <Button onClick={() => scrollToSection('request-form')} className="w-full">Запросить цену</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="slate" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Шифер</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {slates.map((slate, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img src={slate.image} alt={slate.type} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-4">{slate.type}</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">📐</span>
                    <span className="text-muted-foreground">Размер: {slate.size} мм</span>
                  </div>
                  <div className="flex items-start gap-2 mb-4">
                    <span className="text-2xl">🎨</span>
                    <div>
                      <div className="text-muted-foreground mb-2">Цвета:</div>
                      <div className="flex flex-wrap gap-2">
                        {slate.colors.map((color, cIdx) => (
                          <span key={cIdx} className="px-3 py-1 bg-muted rounded-full text-sm">{color}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button onClick={() => scrollToSection('request-form')} className="w-full">Запросить цену</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Волнаколор</h2>
          <div className="max-w-md mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img src="https://images.unsplash.com/photo-1632207691143-643e2753a2c4?w=400&h=300&fit=crop" alt="Волнаколор" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4">Шифер волнистый Волнаколор</h4>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">📐</span>
                  <span className="text-muted-foreground">Размер: 1750×1130 мм</span>
                </div>
                <div className="flex items-start gap-2 mb-4">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <div className="text-muted-foreground mb-2">Цвета:</div>
                    <div className="flex flex-wrap gap-2">
                      {['Серый', 'Красный', 'Зеленый', 'Коричневый'].map((color, idx) => (
                        <span key={idx} className="px-3 py-1 bg-muted rounded-full text-sm">{color}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <Button onClick={() => scrollToSection('request-form')} className="w-full">Запросить цену</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Сертификаты и документы</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Сертификат соответствия ГОСТ', icon: 'FileCheck' },
              { name: 'Протокол испытаний', icon: 'FileText' },
              { name: 'Технические условия', icon: 'FileType' },
            ].map((doc, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
                <Icon name={doc.icon} size={64} className="mx-auto mb-4 text-accent" />
                <h4 className="font-bold">{doc.name}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="request-form" className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Получите коммерческое предложение за 2 часа</h2>
          <p className="text-center text-white/90 mb-12">Заполните форму, и наш менеджер свяжется с вами</p>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Select value={formData.product} onValueChange={(value) => setFormData({ ...formData, product: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите продукцию" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pressure-free">Трубы безнапорные</SelectItem>
                  <SelectItem value="pressure">Трубы напорные</SelectItem>
                  <SelectItem value="slate">Шифер</SelectItem>
                  <SelectItem value="volnacolor">Волнаколор</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Объем (м или шт.)"
                value={formData.volume}
                onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
              />
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить запрос
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer id="contacts" className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <div><a href="tel:+74232448010" className="hover:text-accent">+7 (423) 244-80-10</a></div>
                    <div><a href="tel:+79147922784" className="hover:text-accent">+7 (914) 792-27-84</a></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <a href="mailto:vostokinveststal@mail.ru" className="hover:text-accent">vostokinveststal@mail.ru</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <span>г. Артём, ул. Вокзальная 114</span>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Telegram
                </Button>
              </div>
            </div>
            <div>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=132.187796,43.356417&z=14&l=map&pt=132.187796,43.356417,pm2rdm"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ВостокИнвестСталь. Все права защищены.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-accent">Политика конфиденциальности</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;