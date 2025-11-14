import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import Dashboard from './Dashboard';
import Stats from './Stats';
import Settings from './Settings';

const Index = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('home');
  const [amount, setAmount] = useState([3]);
  const [consistency, setConsistency] = useState('');
  const [smell, setSmell] = useState('');
  const [duration, setDuration] = useState([5]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consistency || !smell) {
      toast({
        title: 'Ошибка',
        description: 'Заполните все поля!',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Успешно! 🎉',
      description: 'Запись добавлена в журнал'
    });

    setConsistency('');
    setSmell('');
    setAmount([3]);
    setDuration([5]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <TabsList className="w-full max-w-6xl mx-auto grid grid-cols-4 h-16">
            <TabsTrigger value="home" className="flex flex-col gap-1">
              <Icon name="Home" size={20} />
              <span className="text-xs">Главная</span>
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="flex flex-col gap-1">
              <Icon name="BookOpen" size={20} />
              <span className="text-xs">Кабинет</span>
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex flex-col gap-1">
              <Icon name="BarChart3" size={20} />
              <span className="text-xs">Статистика</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex flex-col gap-1">
              <Icon name="Settings" size={20} />
              <span className="text-xs">Настройки</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="home" className="m-0">
          <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="text-center space-y-2 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold">💩 Туалетный Журнал</h1>
                <p className="text-lg text-muted-foreground">Трекай свои достижения!</p>
              </div>

              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="PlusCircle" size={24} />
                    Добавить запись
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label>Количество (по шкале от 1 до 5)</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          value={amount}
                          onValueChange={setAmount}
                          min={1}
                          max={5}
                          step={1}
                          className="flex-1"
                        />
                        <span className="text-2xl font-bold w-12 text-center">{amount[0]}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="consistency">Консистенция</Label>
                      <Select value={consistency} onValueChange={setConsistency}>
                        <SelectTrigger id="consistency">
                          <SelectValue placeholder="Выберите..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Жидкий">💦 Жидкий</SelectItem>
                          <SelectItem value="Мягкий">🍦 Мягкий</SelectItem>
                          <SelectItem value="Нормальный">👌 Нормальный</SelectItem>
                          <SelectItem value="Твёрдый">🪨 Твёрдый</SelectItem>
                          <SelectItem value="Очень твёрдый">💎 Очень твёрдый</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="smell">Запах</Label>
                      <Select value={smell} onValueChange={setSmell}>
                        <SelectTrigger id="smell">
                          <SelectValue placeholder="Выберите..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Без запаха">😇 Без запаха</SelectItem>
                          <SelectItem value="Лёгкий">🌸 Лёгкий</SelectItem>
                          <SelectItem value="Терпимый">😐 Терпимый</SelectItem>
                          <SelectItem value="Сильный">😷 Сильный</SelectItem>
                          <SelectItem value="Ядерный">☢️ Ядерный</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Продолжительность (минуты)</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          value={duration}
                          onValueChange={setDuration}
                          min={1}
                          max={30}
                          step={1}
                          className="flex-1"
                        />
                        <span className="text-2xl font-bold w-12 text-center">{duration[0]}</span>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Icon name="Save" size={20} className="mr-2" />
                      Сохранить запись
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="dashboard" className="m-0">
          <Dashboard />
        </TabsContent>

        <TabsContent value="stats" className="m-0">
          <Stats />
        </TabsContent>

        <TabsContent value="settings" className="m-0">
          <Settings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
