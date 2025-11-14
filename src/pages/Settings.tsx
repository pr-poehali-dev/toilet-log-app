import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Settings = () => {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Icon name="Settings" size={32} />
          Настройки
        </h1>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Уведомления</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="daily-reminder" className="flex flex-col gap-1">
                <span className="font-semibold">Ежедневное напоминание</span>
                <span className="text-sm text-muted-foreground">Получать уведомление о записи</span>
              </Label>
              <Switch id="daily-reminder" />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="stats-weekly" className="flex flex-col gap-1">
                <span className="font-semibold">Еженедельная статистика</span>
                <span className="text-sm text-muted-foreground">Сводка за неделю каждое воскресенье</span>
              </Label>
              <Switch id="stats-weekly" />
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Внешний вид</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode" className="flex flex-col gap-1">
                <span className="font-semibold">Тёмная тема</span>
                <span className="text-sm text-muted-foreground">Переключить на тёмное оформление</span>
              </Label>
              <Switch id="dark-mode" />
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Данные</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Экспорт данных</span>
                <span className="text-sm text-muted-foreground">Скачать все записи в CSV</span>
              </div>
              <Button variant="outline">
                <Icon name="Download" size={16} className="mr-2" />
                Экспорт
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-destructive">Удалить все данные</span>
                <span className="text-sm text-muted-foreground">Это действие нельзя отменить</span>
              </div>
              <Button variant="destructive">
                <Icon name="Trash2" size={16} className="mr-2" />
                Удалить
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>О приложении</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">Версия: 1.0.0</p>
            <p className="text-sm text-muted-foreground">Приложение для трекинга визитов в туалет 💩</p>
            <p className="text-sm text-muted-foreground">Сделано с любовью и юмором</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
