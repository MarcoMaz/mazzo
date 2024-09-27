import { useEffect, useRef, useState } from 'react';
import './NewCarousel.css';

import { Circle, ChevronLeft, ChevronRight } from 'react-feather';

interface NewCarouselNavigationProps {
  activeIndex: number;
  items: NewCarouselCardProps[];
  ariaLabelTopic: string;
  setActiveIndex: (index: number) => void;
  scrollToIndex: (index: number) => void;
}

const NewCarouselNavigation: React.FC<NewCarouselNavigationProps> = ({
  activeIndex,
  items,
  ariaLabelTopic,
  setActiveIndex,
  scrollToIndex,
}) => {
  return (
    <ul className='newCarousel__navigation'>
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

interface NewCarouselCardProps {
  id: string;
  children: React.ReactNode;
}

interface NewCarouselLiveRegionProps {
  liveText: string;
}

const NewCarouselLiveRegion: React.FC<NewCarouselLiveRegionProps> = ({
  liveText,
}) => {
  return <div aria-live='polite' aria-atomic='true' aria-label={liveText} />;
};

const NewCarouselCard: React.FC<NewCarouselCardProps> = ({ id, children }) => {
  return (
    <li className='newCarousel__card' key={id}>
      {children}
    </li>
  );
};

interface NewCarouselProps {
  ariaLabelMainTopic: string;
  items: NewCarouselCardProps[];
  ariaLabelTopic: string;
}

const NewCarousel: React.FC<NewCarouselProps> = ({
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
    setLiveText('');

    const timeoutId = setTimeout(() => {
      setLiveText(`Item ${activeIndex + 1} of ${items.length}`);
    }, SHORT_DELAY);

    return () => clearTimeout(timeoutId);
  }, [activeIndex, items.length]);

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
    <section className='newCarousel' aria-label={ariaLabelMainTopic}>
      <ul className='newCarousel__cards' ref={containerRef}>
        {items.map(({ id, children }) => (
          <NewCarouselCard id={id} key={id}>
            {children}
          </NewCarouselCard>
        ))}
      </ul>
      <NewCarouselControls onNext={handleNext} onPrev={handlePrev} />
      <NewCarouselNavigation
        activeIndex={activeIndex}
        items={items}
        ariaLabelTopic={ariaLabelTopic}
        setActiveIndex={setActiveIndex}
        scrollToIndex={scrollToIndex}
      />
      <NewCarouselLiveRegion liveText={liveText} />
    </section>
  );
};

export default NewCarousel;
