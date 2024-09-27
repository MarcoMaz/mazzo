import { useEffect, useRef, useState } from 'react';
import './NewCarousel.css';

import { Circle, ChevronLeft, ChevronRight } from 'react-feather';

interface NewCarouselNavigationProps {
  items: NewCarouselItemProps[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  scrollToIndex: (index: number) => void;
}

const NewCarouselNavigation: React.FC<NewCarouselNavigationProps> = ({
  items,
  activeIndex,
  setActiveIndex,
  scrollToIndex,
}) => {
  return (
    <ul className='newCarousel__navigation'>
      {items.map((_, index) => (
        <li key={index}>
          <button
            aria-label={`News ${index + 1}`}
            data-slide={index}
            className={index === activeIndex ? '-full' : undefined}
            type='button'
            onClick={() => {
              setActiveIndex(index);
              scrollToIndex(index);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActiveIndex(index);
                scrollToIndex(index);
              }
            }}
          >
            <Circle />
          </button>
        </li>
      ))}
    </ul>
  );
};

interface NewCarouselControlsProps {
  onNext: () => void;
  onPrev: () => void;
}

const NewCarouselControls: React.FC<NewCarouselControlsProps> = ({
  onNext,
  onPrev,
}) => {
  return (
    <ul className='newCarousel__controls'>
      <li>
        <button type='button' onClick={onPrev} aria-label='Previous item'>
          <ChevronLeft role='img' />
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

interface NewCarouselItemProps {
  id: string;
  children: React.ReactNode;
}

const NewCarouselItem: React.FC<NewCarouselItemProps> = ({ id, children }) => {
  return (
    <li className='newCarousel__card' key={id}>
      {children}
    </li>
  );
};

interface NewCarouselProps {
  ariaLabel: string;
  items: NewCarouselItemProps[];
}

const NewCarousel: React.FC<NewCarouselProps> = ({ ariaLabel, items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLUListElement>(null);
  const [liveText, setLiveText] = useState('');

  useEffect(() => {
    setLiveText('');

    const timeoutId = setTimeout(() => {
      setLiveText(`Item ${activeIndex + 1} of ${items.length}`);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [activeIndex, items.length]);

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

  const handleNext = () => {
    const container = containerRef.current;
    if (container) {
      const newIndex = Math.min(activeIndex + 1, items.length - 1);

      const itemWidth = container.scrollWidth / items.length;

      container.scrollTo({
        left: newIndex * itemWidth,
        behavior: 'smooth',
      });

      setTimeout(() => {
        setActiveIndex(newIndex);
      }, 500);
    }
  };

  const handlePrev = () => {
    const container = containerRef.current;
    if (container) {
      const newIndex = Math.max(activeIndex - 1, 0);
      const itemWidth = container.scrollWidth / items.length;

      container.scrollTo({
        left: newIndex * itemWidth,
        behavior: 'smooth',
      });

      setTimeout(() => {
        setActiveIndex(newIndex);
      }, 500);
    }
  };

  return (
    <section className='newCarousel' aria-label={ariaLabel}>
      <ul className='newCarousel__cards' ref={containerRef}>
        {items.map(({ id, children }) => (
          <NewCarouselItem id={id} key={id}>
            {children}
          </NewCarouselItem>
        ))}
      </ul>
      <NewCarouselControls onNext={handleNext} onPrev={handlePrev} />
      <NewCarouselNavigation
        items={items}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        scrollToIndex={scrollToIndex}
      />
      <div aria-live='polite' aria-atomic='true' aria-label={liveText} />
    </section>
  );
};

export default NewCarousel;
