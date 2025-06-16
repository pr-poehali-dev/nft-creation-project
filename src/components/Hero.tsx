import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-500/25 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-6 leading-tight">
            Создавайте и торгуйте
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              эксклюзивными NFT
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
            Присоединяйтесь к революции цифрового искусства и владейте
            уникальными токенами в безопасной экосистеме
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4"
            >
              <Icon name="Compass" size={20} className="mr-2" />
              Начать торговлю
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="flex-1">
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-200 mb-1">
                    5.2M+
                  </div>
                  <div className="text-sm text-purple-300">NFT в продаже</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-200 mb-1">
                    320K+
                  </div>
                  <div className="text-sm text-purple-300">
                    Активных трейдеров
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-200 mb-1">
                    ₽2.1B+
                  </div>
                  <div className="text-sm text-purple-300">Объём торгов</div>
                </div>
              </div>
            </div>

            <div className="flex-1 max-w-lg">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=500&h=600&fit=crop&crop=center"
                  alt="Современная цифровая NFT коллекция с яркими неоновыми цветами"
                  className="relative rounded-2xl shadow-2xl border border-purple-400/30 w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
