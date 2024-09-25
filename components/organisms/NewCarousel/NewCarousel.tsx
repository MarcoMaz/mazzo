import { useEffect, useRef, useState } from 'react';
import './NewCarousel.css';

import { Circle, ChevronLeft, ChevronRight } from 'react-feather';

interface NewCarouselNavigationProps {
  items: NewCarouselItemProps[];
  activeIndex: number; // Pass the activeIndex
}

const NewCarouselNavigation: React.FC<NewCarouselNavigationProps> = ({
  items,
  activeIndex,
}) => {
  return (
    <ul className='slidenav'>
      {items.map((_, index) => (
        <li key={index}>
          <button
            data-slide={index}
            className={index === activeIndex ? '-full' : undefined}
            type='button'
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
    <ul className='controls'>
      <li>
        <button type='button' className='btn-prev' onClick={onPrev}>
          <ChevronLeft />
        </button>
      </li>
      <li>
        <button type='button' className='btn-next' onClick={onNext}>
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
    <li className='card' key={id}>
      {children}
    </li>
  );
};

interface NewCarouselProps {
  items: NewCarouselItemProps[];
}

const NewCarousel: React.FC<NewCarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const scrollLeft = container.scrollLeft;
        const itemWidth = container.scrollWidth / items.length; // Calculate the width of each item

        // Calculate the index of the item at the leftmost position
        const newIndex = Math.round(scrollLeft / itemWidth);
        setActiveIndex(newIndex);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [items.length]);

  const handleNext = () => {
    const container = containerRef.current;
    if (container) {
      const newIndex = Math.min(activeIndex + 1, items.length - 1);

      const itemWidth = container.scrollWidth / items.length;

      container.scrollTo({
        left: newIndex * itemWidth,
        behavior: 'smooth',
      });

      // Update the activeIndex after a short delay to allow scrolling to complete
      setTimeout(() => {
        setActiveIndex(newIndex);
      }, 500); // Adjust the timeout duration based on your scroll animation duration
    }
  };

  const handlePrev = () => {
    const container = containerRef.current;
    if (container) {
      const newIndex = Math.max(activeIndex - 1, 0); // Calculate new index
      const itemWidth = container.scrollWidth / items.length;

      container.scrollTo({
        left: newIndex * itemWidth,
        behavior: 'smooth',
      });

      // Update the activeIndex after a short delay to allow scrolling to complete
      setTimeout(() => {
        setActiveIndex(newIndex);
      }, 500); // Adjust the timeout duration based on your scroll animation duration
    }
  };

  return (
    <section className='carousel' aria-label='Recent news'>
      <ul className='cards' ref={containerRef}>
        {items.map(({ id, children }) => (
          <NewCarouselItem id={id} key={id}>
            {children}
          </NewCarouselItem>
        ))}
      </ul>
      <NewCarouselControls onNext={handleNext} onPrev={handlePrev} />
      <NewCarouselNavigation items={items} activeIndex={activeIndex} />
    </section>
  );
};

export default NewCarousel;
