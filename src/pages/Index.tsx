import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import NFTGallery from "@/components/NFTGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <StatsSection />
      <NFTGallery />
    </div>
  );
};

export default Index;
