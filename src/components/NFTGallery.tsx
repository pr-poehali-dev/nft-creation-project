import NFTCard from "./NFTCard";

const NFTGallery = () => {
  const nftItems = [
    {
      id: "1",
      title: "Космический Путешественник #001",
      creator: "AstroArtist",
      price: "2.5 ETH",
      image:
        "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&h=400&fit=crop",
      likes: 127,
    },
    {
      id: "2",
      title: "Неоновый Город",
      creator: "CyberCreator",
      price: "1.8 ETH",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
      likes: 93,
    },
    {
      id: "3",
      title: "Абстрактная Вселенная",
      creator: "DigitalDreamer",
      price: "3.2 ETH",
      image:
        "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400&h=400&fit=crop",
      likes: 204,
    },
    {
      id: "4",
      title: "Кристальный Лес",
      creator: "NatureNFT",
      price: "1.2 ETH",
      image:
        "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop",
      likes: 156,
    },
    {
      id: "5",
      title: "Футуристический Портрет",
      creator: "TechArt",
      price: "4.7 ETH",
      image:
        "https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=400&h=400&fit=crop",
      likes: 89,
    },
    {
      id: "6",
      title: "Цифровая Мандала",
      creator: "SpiritualPixels",
      price: "0.9 ETH",
      image:
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=400&fit=crop",
      likes: 172,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold font-montserrat text-gray-900 mb-4">
            Трендовые коллекции
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Самые популярные и востребованные NFT от проверенных создателей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nftItems.map((item) => (
            <div key={item.id} className="animate-fade-in">
              <NFTCard {...item} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg">
            Загрузить ещё
          </button>
        </div>
      </div>
    </section>
  );
};

export default NFTGallery;
