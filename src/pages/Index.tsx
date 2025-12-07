import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const portfolioItems = [
    {
      id: 1,
      title: 'Дизайн мобильного приложения',
      category: 'UI/UX',
      description: 'Современный интерфейс для финтех-стартапа',
      tags: ['Figma', 'Mobile', 'FinTech']
    },
    {
      id: 2,
      title: 'Корпоративный сайт',
      category: 'Web Design',
      description: 'Разработка сайта для IT-компании',
      tags: ['React', 'Tailwind', 'Animation']
    },
    {
      id: 3,
      title: 'Брендинг стартапа',
      category: 'Branding',
      description: 'Полный фирменный стиль с логотипом',
      tags: ['Logo', 'Identity', 'Print']
    },
    {
      id: 4,
      title: 'E-commerce платформа',
      category: 'Development',
      description: 'Интернет-магазин с интеграциями',
      tags: ['Next.js', 'Stripe', 'API']
    }
  ];

  const fileCategories = [
    {
      name: 'Документы',
      icon: 'FileText',
      count: 24,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Изображения',
      icon: 'Image',
      count: 156,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      name: 'Видео',
      icon: 'Video',
      count: 12,
      color: 'bg-pink-100 text-pink-600'
    },
    {
      name: 'Архивы',
      icon: 'Archive',
      count: 8,
      color: 'bg-green-100 text-green-600'
    }
  ];

  const recentFiles = [
    { name: 'Презентация_проекта.pdf', size: '2.4 MB', date: '2 дня назад', type: 'FileText' },
    { name: 'Logo_final.ai', size: '1.2 MB', date: '5 дней назад', type: 'Image' },
    { name: 'Demo_video.mp4', size: '45.8 MB', date: '1 неделю назад', type: 'Video' },
    { name: 'Assets_pack.zip', size: '12.3 MB', date: '2 недели назад', type: 'Archive' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-white">
      <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600">
                <Icon name="Sparkles" className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">CreativeHub</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => setActiveSection('home')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'home' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('portfolio')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'portfolio' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Портфолио
              </button>
              <button
                onClick={() => setActiveSection('files')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'files' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Файлы
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'about' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                О проекте
              </button>
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">
              ✨ Творческая платформа
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Превращаем идеи
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                в реальность
              </span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              Храните файлы, демонстрируйте работы и делитесь своим творчеством
              <br className="hidden md:block" />
              с миром в едином пространстве
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setActiveSection('portfolio')}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                <Icon name="Sparkles" className="mr-2 h-5 w-5" />
                Смотреть портфолио
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setActiveSection('files')}
              >
                <Icon name="FolderOpen" className="mr-2 h-5 w-5" />
                Файловое хранилище
              </Button>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card className="border-none bg-white/50 backdrop-blur animate-slide-up">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                    <Icon name="Layers" className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Портфолио</CardTitle>
                  <CardDescription>
                    Демонстрируйте свои лучшие работы в удобной галерее
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none bg-white/50 backdrop-blur animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                    <Icon name="HardDrive" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl">Хранилище</CardTitle>
                  <CardDescription>
                    Организуйте файлы проектов в одном месте
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none bg-white/50 backdrop-blur animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                    <Icon name="Share2" className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Поделиться</CardTitle>
                  <CardDescription>
                    Легко делитесь работами с клиентами и коллегами
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'portfolio' && (
        <section className="container mx-auto px-4 py-16 animate-fade-in">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Портфолио</h2>
            <p className="text-lg text-gray-600">Примеры реализованных проектов</p>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="mx-auto flex w-fit">
              <TabsTrigger value="all">Все работы</TabsTrigger>
              <TabsTrigger value="design">Дизайн</TabsTrigger>
              <TabsTrigger value="dev">Разработка</TabsTrigger>
              <TabsTrigger value="branding">Брендинг</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {portfolioItems.map((item, index) => (
                  <Card
                    key={item.id}
                    className="group overflow-hidden border-none bg-white/80 backdrop-blur transition-all hover:shadow-xl animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100">
                      <div className="flex h-full items-center justify-center transition-transform group-hover:scale-105">
                        <Icon name="Image" className="h-16 w-16 text-purple-300" />
                      </div>
                    </div>
                    <CardHeader>
                      <div className="mb-2 flex items-center justify-between">
                        <Badge variant="secondary">{item.category}</Badge>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      )}

      {activeSection === 'files' && (
        <section className="container mx-auto px-4 py-16 animate-fade-in">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Файловое хранилище</h2>
            <p className="text-lg text-gray-600">Все материалы проекта в одном месте</p>
          </div>

          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fileCategories.map((category, index) => (
              <Card
                key={category.name}
                className="cursor-pointer border-none bg-white/80 backdrop-blur transition-all hover:shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${category.color}`}>
                      <Icon name={category.icon as any} className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{category.count}</span>
                  </div>
                  <CardTitle className="mt-4">{category.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="border-none bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle>Последние файлы</CardTitle>
              <CardDescription>Недавно добавленные материалы</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentFiles.map((file) => (
                  <div
                    key={file.name}
                    className="flex items-center justify-between rounded-lg border border-gray-100 p-4 transition-colors hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                        <Icon name={file.type as any} className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{file.name}</p>
                        <p className="text-sm text-gray-500">{file.size} • {file.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Icon name="Download" className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {activeSection === 'about' && (
        <section className="container mx-auto px-4 py-16 animate-fade-in">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900">О проекте</h2>
              <p className="text-lg text-gray-600">Творческая платформа для хранения и демонстрации работ</p>
            </div>

            <Card className="border-none bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl">CreativeHub</CardTitle>
                <CardDescription className="text-base">
                  Современное решение для креативных профессионалов
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">🎯 Наша миссия</h3>
                  <p className="text-gray-600">
                    Создать удобное пространство, где креативные специалисты могут хранить файлы,
                    демонстрировать свои работы и делиться ими с миром.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">✨ Особенности</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-1 h-5 w-5 text-purple-600" />
                      <span>Удобное файловое хранилище с категориями</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-1 h-5 w-5 text-purple-600" />
                      <span>Красивая галерея портфолио с фильтрами</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-1 h-5 w-5 text-purple-600" />
                      <span>Минималистичный дизайн без лишних деталей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-1 h-5 w-5 text-purple-600" />
                      <span>Быстрая загрузка и плавные анимации</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">🚀 Для кого</h3>
                  <p className="text-gray-600">
                    Платформа идеально подходит для дизайнеров, разработчиков, фотографов,
                    иллюстраторов и всех, кто хочет красиво представить свои работы.
                  </p>
                </div>

                <div className="pt-6">
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    size="lg"
                  >
                    <Icon name="Mail" className="mr-2 h-5 w-5" />
                    Написать нам
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <footer className="border-t bg-white/50 backdrop-blur">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600">
                <Icon name="Sparkles" className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-gray-900">CreativeHub</span>
            </div>
            <p className="text-sm text-gray-600">
              © 2024 CreativeHub. Все права защищены.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Github" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;