import './CarouselControls.css';

import { ChevronLeft, ChevronRight } from 'react-feather';

import { SetStateAction, useRef } from 'react';

import { CarouselCardProps } from '../CarouselCards/CarouselCards';

interface CarouselControlsProps {
  activeIndex: number;
  containerRef: React.RefObject<HTMLUListElement>;
  items: CarouselCardProps[];
  setActiveIndex: (index: number) => void;
  setLastInteraction: React.Dispatch<SetStateAction<'button' | 'dot'>>;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  activeIndex,
  containerRef,
  items,
  setActiveIndex,
  setLastInteraction,
}) => {
  const SHORT_DELAY: number = 500;
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  const updateActiveIndex = (newIndex: number) => {
    const container = containerRef.current;
    if (container) {
      const itemWidth = container.scrollWidth / items.length;
      container.scrollTo({
        left: newIndex * itemWidth,
        behavior: 'smooth',
      });

      setTimeout(() => {
        setActiveIndex(newIndex);
      }, SHORT_DELAY);
    }
  };

  const handleNext = () => {
    const newIndex = Math.min(activeIndex + 1, items.length - 1);
    updateActiveIndex(newIndex);
    setLastInteraction('button');
    nextButtonRef.current?.focus();
  };

  const handlePrev = () => {
    const newIndex = Math.max(activeIndex - 1, 0);
    updateActiveIndex(newIndex);
    setLastInteraction('button');
    prevButtonRef.current?.focus();
  };

  return (
    <ul className='carousel__controls'>
      <li>
        <button
          type='button'
          onClick={handlePrev}
          aria-label='Previous item'
          ref={prevButtonRef}
        >
          <ChevronLeft />
        </button>
      </li>
      <li>
        <button
          type='button'
          onClick={handleNext}
          aria-label='Next item'
          ref={nextButtonRef}
        >
          <ChevronRight />
        </button>
      </li>
    </ul>
  );
};

export default CarouselControls;
