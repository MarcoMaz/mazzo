import { Dispatch, SetStateAction, useEffect } from 'react';

import { CarouselCardProps } from '../CarouselCards/CarouselCards';

interface CarouselLiveRegionProps {
  activeIndex: number;
  items: CarouselCardProps[];
  liveText: string;
  setLiveText: Dispatch<SetStateAction<string>>;
}

const CarouselLiveRegion: React.FC<CarouselLiveRegionProps> = ({
  activeIndex,
  items,
  liveText,
  setLiveText,
}) => {
  const SHORT_DELAY: number = 500;

  useEffect(() => {
    setLiveText('');

    const timeoutId = setTimeout(() => {
      setLiveText(`Item ${activeIndex + 1} of ${items.length}`);
    }, SHORT_DELAY);

    return () => clearTimeout(timeoutId);
  }, [activeIndex, items.length, setLiveText]);

  return (
    <div
      role='status'
      aria-live='polite'
      aria-atomic='true'
      aria-label={liveText}
    />
  );
};

export default CarouselLiveRegion;
