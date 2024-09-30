'use client';

import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import './Carousel.css';

import { Circle, ChevronLeft, ChevronRight } from 'react-feather';

interface CarouselNavigationProps {
  activeIndex: number;
  ariaLabelTopic: string;
  items: CarouselCardProps[];
  setActiveIndex: (index: number) => void;
  scrollToIndex: (index: number) => void;
}

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  activeIndex,
  ariaLabelTopic,
  items,
  setActiveIndex,
  scrollToIndex,
}) => {
  const activeDotRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (activeDotRef.current) {
      activeDotRef.current.focus();
    }
  }, [activeIndex]);

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
              ref={index === activeIndex ? activeDotRef : null}
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
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  items: CarouselCardProps[];
  containerRef: React.RefObject<HTMLUListElement>;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  activeIndex,
  setActiveIndex,
  items,
  containerRef,
}) => {
  const SHORT_DELAY: number = 500;

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

  return (
    <ul className='carousel__controls'>
      <li>
        <button type='button' onClick={handlePrev} aria-label='Previous item'>
          <ChevronLeft />
        </button>
      </li>
      <li>
        <button type='button' onClick={handleNext} aria-label='Next item'>
          <ChevronRight />
        </button>
      </li>
    </ul>
  );
};

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

interface CarouselCardsProps {
  activeIndex: number;
  containerRef: RefObject<HTMLUListElement>;
  items: CarouselCardProps[];
}

const CarouselCards: React.FC<CarouselCardsProps> = ({
  activeIndex,
  containerRef,
  items,
}) => {
  return (
    <ul className='carousel__cards' ref={containerRef}>
      {items.map(({ id, children }, index) => (
        <CarouselCard id={id} key={id} isActive={index === activeIndex}>
          {children}
        </CarouselCard>
      ))}
    </ul>
  );
};

interface CarouselCardProps {
  id: string;
  isActive?: boolean;
  children: React.ReactNode;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  id,
  isActive,
  children,
}) => {
  const cardRef = useRef<HTMLLIElement>(null); // Ref to the card element

  useEffect(() => {
    const card = cardRef.current;

    if (card) {
      const focusableElements = card.querySelectorAll<HTMLElement>(
        'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      console.log('focusableElements', focusableElements);

      focusableElements.forEach((element) => {
        if (!isActive) {
          element.setAttribute('tabIndex', '-1');
        } else {
          element.removeAttribute('tabIndex');
        }
      });
    }
  }, [isActive]);

  return (
    <li className='carousel__card' key={id} ref={cardRef}>
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
      />
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
