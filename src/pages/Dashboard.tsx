import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface LogEntry {
  id: string;
  date: Date;
  amount: number;
  consistency: string;
  smell: string;
  duration: number;
}

const Dashboard = () => {
  const [entries] = useState<LogEntry[]>([
    {
      id: '1',
      date: new Date('2024-11-13'),
      amount: 3,
      consistency: 'Нормальный',
      smell: 'Терпимый',
      duration: 5
    },
    {
      id: '2',
      date: new Date('2024-11-12'),
      amount: 2,
      consistency: 'Жидкий',
      smell: 'Сильный',
      duration: 8
    }
  ]);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            💩 История визитов
          </h1>
        </div>

        <div className="grid gap-4">
          {entries.map((entry) => (
            <Card key={entry.id} className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-5 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Дата</p>
                    <p className="font-semibold">{entry.date.toLocaleDateString('ru-RU')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Количество</p>
                    <p className="font-semibold flex items-center gap-1">
                      {entry.amount} <Icon name="Droplet" size={16} />
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Консистенция</p>
                    <p className="font-semibold">{entry.consistency}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Запах</p>
                    <p className="font-semibold">{entry.smell}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Продолжительность</p>
                    <p className="font-semibold">{entry.duration} мин</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {entries.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground text-lg">Записей пока нет 🚽</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
