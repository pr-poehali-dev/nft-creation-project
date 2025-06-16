import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      title: "Общий объём торгов",
      value: "47,892",
      unit: "ETH",
      change: "+24.8%",
      trend: "up",
      icon: "BarChart3",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      description: "За последние 30 дней",
    },
    {
      title: "Активные коллекционеры",
      value: "128,456",
      unit: "",
      change: "+18.3%",
      trend: "up",
      icon: "Users2",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      description: "Уникальные владельцы",
    },
    {
      title: "NFT в обращении",
      value: "2.4M",
      unit: "",
      change: "+31.2%",
      trend: "up",
      icon: "Sparkles",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50",
      description: "Всего создано",
    },
    {
      title: "Средняя цена сделки",
      value: "1.23",
      unit: "ETH",
      change: "-5.4%",
      trend: "down",
      icon: "TrendingUp",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      description: "За последнюю неделю",
    },
  ];

  const AnimatedCounter = ({
    value,
    unit,
  }: {
    value: string;
    unit: string;
  }) => {
    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
      if (!isVisible) return;

      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, 300);

      return () => clearTimeout(timer);
    }, [isVisible, value]);

    return (
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-black tracking-tight transition-all duration-700 ease-out">
          {displayValue}
        </span>
        {unit && (
          <span className="text-lg font-semibold text-gray-500">{unit}</span>
        )}
      </div>
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>

      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-200 rounded-full opacity-15 animate-pulse delay-300"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
            <Icon name="Activity" size={20} className="text-purple-600" />
            <span className="text-sm font-semibold text-purple-800">
              Live Статистика
            </span>
          </div>

          <h2 className="text-5xl font-black bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent mb-4">
            Рынок в цифрах
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Актуальная статистика NFT-экосистемы обновляется в реальном времени
          </p>
        </div>

        {/* Сетка статистики */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Фоновый градиент карточки */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-40`}
                ></div>

                {/* Светящийся бордер */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`}
                ></div>

                <CardContent className="relative p-8">
                  {/* Иконка и индикатор тренда */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-lg`}
                    >
                      <Icon
                        name={stat.icon as any}
                        size={28}
                        className="text-white"
                      />
                    </div>

                    <div className="flex items-center gap-1">
                      <Icon
                        name={
                          stat.trend === "up" ? "TrendingUp" : "TrendingDown"
                        }
                        size={16}
                        className={
                          stat.trend === "up"
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      />
                      <span
                        className={`text-sm font-bold ${
                          stat.trend === "up"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                  </div>

                  {/* Значение */}
                  <div className="mb-3">
                    <AnimatedCounter value={stat.value} unit={stat.unit} />
                  </div>

                  {/* Название и описание */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {stat.title}
                    </h3>
                    <p className="text-sm text-gray-500">{stat.description}</p>
                  </div>

                  {/* Декоративная полоска прогресса */}
                  <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-1000 ease-out ${
                        isVisible ? "w-full" : "w-0"
                      }`}
                      style={{ transitionDelay: `${index * 200 + 500}ms` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <Icon name="Clock" size={16} />
            Данные обновляются каждые 5 минут
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
