"use client";

import "./CardCarousel.css";

import React, { useEffect, useRef, useState } from "react";

import Dots from "./Dots/Dots";

export interface CardCarouselProps {
  children: React.ReactNode;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ children }) => {
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
      <div className="card-carousel" ref={containerRef}>
        {React.Children.map(children, (child, index) => (
          <div key={index} className="card">
            {child}
          </div>
        ))}
      </div>
      <Dots
        dots={React.Children.toArray(children)}
        activeIndex={activeIndex}
        onClick={handleDotClick}
      />
    </>
  );
};

export default CardCarousel;
