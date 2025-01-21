import Card from '@/components/molecules/Card';
import { CardType } from '@/hanaHakdang';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface CarouselProps {
  cards: CardType[];
}

export default function Carousel({ cards }: CarouselProps) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-80 overflow-hidden">
      <Slider {...settings}>
        {cards.map((items, index) => (
          <div key={index}>
            <Card
              cardColor={items.cardColor}
              cardTitle={items.cardTitle}
              cardDescription={items.cardDescription}
              cardImage={items.cardImageUrl}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
