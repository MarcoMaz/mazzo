"use client";

import "./Accordion.css";

import AccordionHeader from "./parts/AccordionHeader/AccordionHeader";
import AccordionPanel from "./parts/AccordionPanel/AccordionPanel";

import { CardProps } from "../CardCarousel/parts/Card/Card";
import { useState } from "react";
import React from "react";

interface AccordionProps {
  cards: CardProps[];
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ cards, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // const combinedClassName = className
  //   ? `${styles.container} ${className}`
  //   : styles.container;

  const handleHeaderClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="accordion">
      {cards.map(
        (
          { headline, subheadline, description, chips, CTA: { url, label } },
          index
        ) => (
          <React.Fragment key={index}>
            {index !== activeIndex && (
              <AccordionHeader
                className={index === activeIndex - 1 ? "borderReset" : ""}
                headline={headline}
                index={index}
                onClick={() => handleHeaderClick(index)}
              />
            )}
            {index === activeIndex && (
              <AccordionPanel
                buttonId={`accordion-${index}-id`}
                headline={headline}
                subheadline={subheadline}
                description={description}
                chips={chips}
                CTA={{ url, label }}
              />
            )}
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default Accordion;
