import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Stats = () => {
  const stats = {
    total: 156,
    avgDuration: 6.5,
    mostCommon: 'Нормальный',
    thisWeek: 12
  };

  const weeklyData = [
    { day: 'Пн', count: 2 },
    { day: 'Вт', count: 1 },
    { day: 'Ср', count: 3 },
    { day: 'Чт', count: 2 },
    { day: 'Пт', count: 2 },
    { day: 'Сб', count: 1 },
    { day: 'Вс', count: 1 }
  ];

  const maxCount = Math.max(...weeklyData.map(d => d.count));

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          📊 Статистика
        </h1>

        <div className="grid md:grid-cols-4 gap-4">
          <Card className="animate-scale-in">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Icon name="Calendar" size={16} />
                Всего визитов
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.total}</p>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Icon name="Clock" size={16} />
                Средняя длительность
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.avgDuration} мин</p>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Icon name="TrendingUp" size={16} />
                За эту неделю
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.thisWeek}</p>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Icon name="Star" size={16} />
                Популярная
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold">{stats.mostCommon}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Активность за неделю</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between gap-4 h-48">
              {weeklyData.map((data, index) => (
                <div key={data.day} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full bg-primary rounded-t-lg transition-all hover:bg-accent"
                    style={{ 
                      height: `${(data.count / maxCount) * 100}%`,
                      minHeight: '20px'
                    }}
                  />
                  <p className="text-sm font-medium">{data.day}</p>
                  <p className="text-xs text-muted-foreground">{data.count}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Интересные факты 🎯</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="font-semibold">Рекорд продолжительности</p>
                <p className="text-sm text-muted-foreground">15 минут (07.11.2024)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <span className="text-2xl">🔥</span>
              <div>
                <p className="font-semibold">Самая продуктивная неделя</p>
                <p className="text-sm text-muted-foreground">18 визитов (01-07.10.2024)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <span className="text-2xl">⏰</span>
              <div>
                <p className="font-semibold">Любимое время</p>
                <p className="text-sm text-muted-foreground">08:00-09:00 (34% всех визитов)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Stats;
