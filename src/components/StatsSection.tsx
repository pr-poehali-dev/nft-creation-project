import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const StatsSection = () => {
  const stats = [
    {
      title: "Общий объём",
      value: "2,847 ETH",
      change: "+12.5%",
      icon: "TrendingUp",
      color: "text-green-500",
    },
    {
      title: "Активные пользователи",
      value: "15,492",
      change: "+8.2%",
      icon: "Users",
      color: "text-blue-500",
    },
    {
      title: "NFT создано",
      value: "89,234",
      change: "+15.7%",
      icon: "Image",
      color: "text-purple-500",
    },
    {
      title: "Средняя цена",
      value: "0.47 ETH",
      change: "-2.1%",
      icon: "DollarSign",
      color: "text-red-500",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold font-montserrat text-gray-900 mb-2">
            Статистика маркетплейса
          </h2>
          <p className="text-gray-600">Актуальные данные о NFT-экосистеме</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100`}
                  >
                    <Icon
                      name={stat.icon as any}
                      size={24}
                      className="text-purple-600"
                    />
                  </div>
                  <span className={`text-sm font-medium ${stat.color}`}>
                    {stat.change}
                  </span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
