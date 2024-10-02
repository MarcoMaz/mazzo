import { RefObject, useEffect, useRef } from 'react';

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
      {items.map(({ id, children }, index) => {
        const cardsIsActive = index === activeIndex;

        return (
          <CarouselCard id={id} key={id} isActive={cardsIsActive}>
            {children}
          </CarouselCard>
        );
      })}
    </ul>
  );
};

export default CarouselCards;

export interface CarouselCardProps {
  id: string;
  isActive?: boolean;
  children: React.ReactNode;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  id,
  isActive,
  children,
}) => {
  const cardRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    if (card) {
      const focusableElements = card.querySelectorAll<HTMLElement>(
        'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

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
