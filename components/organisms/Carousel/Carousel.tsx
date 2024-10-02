'use client';

import { useEffect, useRef, useState } from 'react';

import './Carousel.css';

import CarouselNavigation from './parts/CarouselNavigation/CarouselNavigation';
import CarouselControls from './parts/CarouselControls/CarouselControls';
import CarouselLiveRegion from './parts/CarouselLiveRegion/CarouselLiveRegion';
import CarouselCards, {
  CarouselCardProps,
} from './parts/CarouselCards/CarouselCards';

interface CarouselProps {
  ariaLabelMainTopic: string;
  ariaLabelTopic: string;
  items: CarouselCardProps[];
}

const Carousel: React.FC<CarouselProps> = ({
  ariaLabelMainTopic,
  ariaLabelTopic,
  items,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [liveText, setLiveText] = useState('');
  const containerRef = useRef<HTMLUListElement>(null);
  const [lastInteraction, setLastInteraction] = useState<'button' | 'dot'>(
    'button'
  );

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (container) {
      const itemWidth = container.scrollWidth / items.length;
      container.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.scrollWidth / items.length;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    handleScroll();

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  });

  return (
    <section className='carousel' aria-label={ariaLabelMainTopic}>
      <CarouselCards
        activeIndex={activeIndex}
        containerRef={containerRef}
        items={items}
      />
      <CarouselControls
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        items={items}
        containerRef={containerRef}
        setLastInteraction={setLastInteraction}
      />
      <CarouselNavigation
        activeIndex={activeIndex}
        items={items}
        ariaLabelTopic={ariaLabelTopic}
        setActiveIndex={setActiveIndex}
        scrollToIndex={scrollToIndex}
        lastInteraction={lastInteraction}
        setLastInteraction={setLastInteraction}
      />
      <CarouselLiveRegion
        activeIndex={activeIndex}
        items={items}
        liveText={liveText}
        setLiveText={setLiveText}
      />
    </section>
  );
};

export default Carousel;
