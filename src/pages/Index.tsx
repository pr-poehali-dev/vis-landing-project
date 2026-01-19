import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заявка отправлена:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold text-primary">ВИС</div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#advantages" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">Продукция</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild className="bg-accent hover:bg-accent/90">
            <a href="#contact">Заказать звонок</a>
          </Button>
        </div>
      </header>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10" />
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-snug mb-6 max-w-xl">
                Газобетон высочайшего качества для вашего идеального дома
              </h1>
              <div className="flex items-center gap-4 mb-6 text-sm font-semibold text-foreground">
                <span className="flex items-center gap-2">
                  <Icon name="Check" className="text-accent" size={20} />
                  Точная геометрия
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Check" className="text-accent" size={20} />
                  23 года опыта
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Check" className="text-accent" size={20} />
                  Прямой дилер
                </span>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Компания ВИС — официальный дилер завода "Байкальский газобетон". Более 12 000 клиентов выбирают нас за качество, надежность и удобную доставку в пределах Приморского края.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Наше преимущество: собственный ж/д тупик для быстрой отгрузки и доступ к лучшему газобетону, производимому на немецком оборудовании.
              </p>
            </div>

            <Card className="p-8 shadow-xl animate-fade-in">
              <h3 className="text-2xl font-bold text-primary mb-6">Получить консультацию</h3>
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
                  placeholder="Email (для рассылки)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Textarea
                  placeholder="Ваш вопрос (необязательно)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-6">
            Как выбрать качественный газобетон для строительства?
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
            При возведении дома важно выбрать материал, который обеспечит долговечность конструкции на десятки лет, 
            хорошую теплоизоляцию, быструю монтаж благодаря точности геометрии и надежность в климате Приморья.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "Shield", title: "Долговечность и прочность", text: "Конструкция на десятилетия" },
              { icon: "Home", title: "Теплоизоляция", text: "Экономия на отоплении" },
              { icon: "Ruler", title: "Точная геометрия", text: "Идеальная подгонка блоков" },
              { icon: "Cloud", title: "Климатическая надежность", text: "Устойчивость в Приморье" },
              { icon: "Truck", title: "Удобная доставка", text: "Быстрая отгрузка по краю" }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <Icon name={item.icon as any} className="text-accent mb-4" size={40} />
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </Card>
            ))}
          </div>

          <p className="text-center text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            На рынке много предложений, но не все соответствуют нужным параметрам. 
            Компания ВИС предлагает материал, прошедший проверку временем и доверием 12 000+ клиентов.
          </p>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Почему выбирают ВИС?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-primary/20 hover:border-primary transition-colors">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Icon name="Factory" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Немецкая линия производства</h3>
              <p className="text-muted-foreground leading-relaxed">
                Автоклавный газобетон производится на оборудовании немецкого производителя. 
                Точная геометрия ± 1 мм гарантирует идеальный подгон блоков, экономию раствора и ускорение строительства.
              </p>
            </Card>

            <Card className="p-8 border-2 border-accent/20 hover:border-accent transition-colors">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Icon name="TrainTrack" className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-accent mb-4">Собственный ж/д тупик</h3>
              <p className="text-muted-foreground leading-relaxed">
                Прямой доступ к железнодорожному тупику означает быструю доставку по Приморскому краю, 
                удобную логистику для больших объемов и конкурентные цены благодаря экономии на доставке.
              </p>
            </Card>

            <Card className="p-8 border-2 border-secondary/20 hover:border-secondary transition-colors">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Icon name="ShieldCheck" className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">23 года опыта</h3>
              <p className="text-muted-foreground leading-relaxed">
                Компания работает с 2003 года (23 года на рынке). 12 000+ клиентов по всему Приморскому краю 
                доверяют нам свои строительные проекты. Это гарантия качества.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-6">Наша продукция</h2>
          <p className="text-center text-lg text-secondary mb-4 font-semibold">
            Полный диапазон марок и размеров для любых строительных задач
          </p>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Мы предлагаем автоклавный газобетон различных марок и размеров. Каждый блок прошел строгий контроль качества.
          </p>

          <Card className="overflow-x-auto mb-12">
            <table className="w-full">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="p-4 text-left">Марка</th>
                  <th className="p-4 text-left">Плотность (кг/м³)</th>
                  <th className="p-4 text-left">Теплопроводность (Вт/м·К)</th>
                  <th className="p-4 text-left">Прочность (МПа)</th>
                  <th className="p-4 text-left">Применение</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">D400</td>
                  <td className="p-4">400</td>
                  <td className="p-4">0.096</td>
                  <td className="p-4">1.5</td>
                  <td className="p-4">Теплоизоляция</td>
                </tr>
                <tr className="border-b bg-muted/20">
                  <td className="p-4 font-semibold">D500</td>
                  <td className="p-4">500</td>
                  <td className="p-4">0.12</td>
                  <td className="p-4">2.5</td>
                  <td className="p-4">Несущие стены малоэтажных зданий</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">D600</td>
                  <td className="p-4">600</td>
                  <td className="p-4">0.14</td>
                  <td className="p-4">3.5</td>
                  <td className="p-4">Несущие стены до 3 этажов</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-4 font-semibold">D700</td>
                  <td className="p-4">700</td>
                  <td className="p-4">0.18</td>
                  <td className="p-4">5.0</td>
                  <td className="p-4">Многоэтажное строительство</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Factory", text: "Производство: Завод 'Байкальский газобетон' (немецкое оборудование)" },
              { icon: "CheckCircle", text: "Контроль качества: Каждый блок проверен" },
              { icon: "Package", text: "Размеры: От стандартных до нестандартных" },
              { icon: "Store", text: "Минимальный заказ: Отсутствует (розница и опт)" }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 flex items-start gap-4">
                <Icon name={item.icon as any} className="text-accent flex-shrink-0" size={24} />
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Контакты</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="p-8 mb-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Свяжитесь с нами</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <Icon name="Phone" size={20} />
                      Телефоны
                    </h4>
                    <div className="space-y-2 ml-7">
                      <p className="text-muted-foreground">Многоканальный: <a href="tel:+74232448010" className="text-accent hover:underline">+7 (423) 244-80-10</a></p>
                      <p className="text-muted-foreground">Оптовый отдел: <a href="tel:+79147922784" className="text-accent hover:underline">+7 (914) 792-27-84</a></p>
                      <p className="text-muted-foreground">Розничный отдел: <a href="tel:+79147292149" className="text-accent hover:underline">+7 (914) 729-21-49</a></p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <Icon name="MessageCircle" size={20} />
                      Мессенджеры
                    </h4>
                    <div className="space-y-2 ml-7">
                      <p className="text-muted-foreground">
                        <a href="https://wa.me/79147922784" className="text-accent hover:underline" target="_blank" rel="noopener">WhatsApp (опт): +7 (914) 792-27-84</a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="https://t.me/79147922784" className="text-accent hover:underline" target="_blank" rel="noopener">Telegram (опт): +7 (914) 792-27-84</a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="https://wa.me/79147292149" className="text-accent hover:underline" target="_blank" rel="noopener">WhatsApp (розница): +7 (914) 729-21-49</a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <Icon name="Mail" size={20} />
                      Email
                    </h4>
                    <p className="text-muted-foreground ml-7">
                      <a href="mailto:vostokinveststal@mail.ru" className="text-accent hover:underline">vostokinveststal@mail.ru</a>
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <Icon name="MapPin" size={20} />
                      Адрес
                    </h4>
                    <p className="text-muted-foreground ml-7">г. Артем, ул. Вокзальная, 114</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <Icon name="Clock" size={20} />
                      Время работы
                    </h4>
                    <p className="text-muted-foreground ml-7">Пн-Пт: 8:30-17:30 (без обеда)</p>
                    <p className="text-muted-foreground ml-7">Сб-Вс: Выходной</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Оставить заявку</h3>
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
                  placeholder="Email (для рассылки)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Textarea
                  placeholder="Ваш вопрос"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ВИС</h3>
              <p className="text-primary-foreground/80">
                Официальный дилер завода "Байкальский газобетон" в Приморском крае с 2003 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                <a href="#advantages" className="block text-primary-foreground/80 hover:text-primary-foreground">Преимущества</a>
                <a href="#products" className="block text-primary-foreground/80 hover:text-primary-foreground">Продукция</a>
                <a href="#contact" className="block text-primary-foreground/80 hover:text-primary-foreground">Контакты</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>+7 (423) 244-80-10</p>
                <p>vostokinveststal@mail.ru</p>
                <p>г. Артем, ул. Вокзальная, 114</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>© 2003-2024 ВИС. Все права защищены. 23 года на рынке строительных материалов.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;