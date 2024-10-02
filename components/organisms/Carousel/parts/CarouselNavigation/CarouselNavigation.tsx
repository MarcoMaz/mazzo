import { Circle } from 'react-feather';

import { SetStateAction, useLayoutEffect, useRef } from 'react';

import { CarouselCardProps } from '../CarouselCards/CarouselCards';

interface CarouselNavigationProps {
  activeIndex: number;
  ariaLabelTopic: string;
  items: CarouselCardProps[];
  lastInteraction: 'button' | 'dot';
  scrollToIndex: (index: number) => void;
  setLastInteraction: React.Dispatch<SetStateAction<'button' | 'dot'>>;
  setActiveIndex: (index: number) => void;
}

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  activeIndex,
  ariaLabelTopic,
  items,
  lastInteraction,
  scrollToIndex,
  setLastInteraction,
  setActiveIndex,
}) => {
  const activeDotRef = useRef<HTMLButtonElement | null>(null);
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    if (
      !isFirstRender.current &&
      lastInteraction === 'dot' &&
      activeDotRef.current
    ) {
      const timerId = setTimeout(() => {
        activeDotRef.current?.focus({ preventScroll: true });
      }, 0);

      return () => clearTimeout(timerId);
    }
  }, [activeIndex, lastInteraction]);

  return (
    <ul className='carousel__navigation'>
      {items.map((_, index) => {
        const navigationAriaLabel = `${ariaLabelTopic} ${index + 1}`;
        const navigationClassName = index === activeIndex ? '-full' : undefined;
        const navigationRef = index === activeIndex ? activeDotRef : null;

        const handleNavigation = (index: number) => {
          setActiveIndex(index);
          scrollToIndex(index);
          setLastInteraction('dot');
        };

        return (
          <li key={index}>
            <button
              type='button'
              ref={navigationRef}
              aria-label={navigationAriaLabel}
              data-slide={index}
              className={navigationClassName}
              onClick={() => {
                handleNavigation(index);
                setLastInteraction('button');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleNavigation(index);
                  setLastInteraction('dot');
                }
              }}
            >
              <Circle />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default CarouselNavigation;
