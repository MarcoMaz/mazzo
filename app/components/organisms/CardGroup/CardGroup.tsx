"use client";

import styles from "./CardGroup.module.css";

import Card, { CardProps } from "../../molecules/Card/Card";
import DotGroup from "../../molecules/DotGroup/DotGroup";
import { useEffect, useRef, useState } from "react";

interface CardGroupProps {
  dataCy: string;
  cards: CardProps[];
}

const CardGroup: React.FC<CardGroupProps> = ({ cards, dataCy }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
              10
            );
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    const cardElements = Array.from(container.children) as HTMLElement[];
    cardElements.forEach((card, index) => {
      observer.observe(card);
      card.setAttribute("data-index", index.toString());
    });

    return () => {
      cardElements.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);

    const container = containerRef.current;
    if (container) {
      const cardElements = Array.from(container.children) as HTMLElement[];
      const card = cardElements[index];
      if (card) {
        const cardOffsetLeft = card.offsetLeft;
        container.scrollTo({
          left: cardOffsetLeft,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <div data-cy={dataCy} className={styles.container} ref={containerRef}>
        {cards.map(
          (
            { headline, subheadline, description, chips, CTA: { url, label } },
            index
          ) => (
            <Card
              headline={headline}
              subheadline={subheadline}
              description={description}
              chips={chips}
              CTA={{ url, label }}
              dataCy={headline}
              key={index}
            />
          )
        )}
      </div>
      <DotGroup
        dots={cards}
        dataCy="Dots"
        className={styles.dotGroup}
        activeIndex={activeIndex}
        onClick={handleDotClick}
      />
    </>
  );
};

export default CardGroup;
