import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import './Carousel.css';

import { Circle, ChevronLeft, ChevronRight } from 'react-feather';

interface CarouselNavigationProps {
  activeIndex: number;
  items: CarouselCardProps[];
  ariaLabelTopic: string;
  setActiveIndex: (index: number) => void;
  scrollToIndex: (index: number) => void;
}

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  activeIndex,
  items,
  ariaLabelTopic,
  setActiveIndex,
  scrollToIndex,
}) => {
  return (
    <ul className='carousel__navigation'>
      {items.map((_, index) => {
        const navigationAriaLabel = `${ariaLabelTopic} ${index + 1}`;
        const navigationClassName = index === activeIndex ? '-full' : undefined;

        const handleNavigation = (index: number) => {
          setActiveIndex(index);
          scrollToIndex(index);
        };

        return (
          <li key={index}>
            <button
              type='button'
              aria-label={navigationAriaLabel}
              data-slide={index}
              className={navigationClassName}
              onClick={() => handleNavigation(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleNavigation(index);
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

interface CarouselControlsProps {
  onNext: () => void;
  onPrev: () => void;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  onNext,
  onPrev,
}) => {
  return (
    <ul className='carousel__controls'>
      <li>
        <button type='button' onClick={onPrev} aria-label='Previous item'>
          <ChevronLeft />
        </button>
      </li>
      <li>
        <button type='button' onClick={onNext} aria-label='Next item'>
          <ChevronRight />
        </button>
      </li>
    </ul>
  );
};

interface CarouselCardProps {
  id: string;
  children: React.ReactNode;
}

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

  return <div aria-live='polite' aria-atomic='true' aria-label={liveText} />;
};

const CarouselCard: React.FC<CarouselCardProps> = ({ id, children }) => {
  return (
    <li className='carousel__card' key={id}>
      {children}
    </li>
  );
};

interface CarouselProps {
  ariaLabelMainTopic: string;
  items: CarouselCardProps[];
  ariaLabelTopic: string;
}

const Carousel: React.FC<CarouselProps> = ({
  ariaLabelMainTopic,
  items,
  ariaLabelTopic,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [liveText, setLiveText] = useState('');

  const SHORT_DELAY: number = 500;
  const containerRef = useRef<HTMLUListElement>(null);

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
  };

  const handlePrev = () => {
    const newIndex = Math.max(activeIndex - 1, 0);
    updateActiveIndex(newIndex);
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
      <ul className='carousel__cards' ref={containerRef}>
        {items.map(({ id, children }) => (
          <CarouselCard id={id} key={id}>
            {children}
          </CarouselCard>
        ))}
      </ul>
      <CarouselControls onNext={handleNext} onPrev={handlePrev} />
      <CarouselNavigation
        activeIndex={activeIndex}
        items={items}
        ariaLabelTopic={ariaLabelTopic}
        setActiveIndex={setActiveIndex}
        scrollToIndex={scrollToIndex}
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
