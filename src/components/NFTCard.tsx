import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface NFTCardProps {
  id: string;
  title: string;
  creator: string;
  price: string;
  image: string;
  likes: number;
  isLiked?: boolean;
}

const NFTCard = ({
  title,
  creator,
  price,
  image,
  likes,
  isLiked = false,
}: NFTCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:shadow-purple-500/10 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
          >
            <Icon
              name="Heart"
              size={14}
              className={isLiked ? "fill-red-500 text-red-500" : ""}
            />
            <span className="ml-1 text-sm">{likes}</span>
          </Button>
        </div>
        <Badge className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500">
          Новое
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-600 flex items-center mt-1">
              <Icon name="User" size={12} className="mr-1" />
              {creator}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Цена</p>
            <p className="font-bold text-lg flex items-center">
              <Icon name="Zap" size={16} className="mr-1 text-purple-500" />
              {price}
            </p>
          </div>
          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Купить
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NFTCard;
