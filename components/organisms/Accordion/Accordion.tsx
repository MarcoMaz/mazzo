"use client";

import "./Accordion.css";

import AccordionHeader from "./parts/AccordionHeader/AccordionHeader";
import AccordionPanel from "./parts/AccordionPanel/AccordionPanel";

import { CardProps } from "../CardCarousel/parts/Card/Card";
import { useState } from "react";
import React from "react";

interface AccordionProps {
  cards: CardProps[];
}

const Accordion: React.FC<AccordionProps> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {cards.map(
        (
          { headline, subheadline, description, chips, CTA: { url, label } },
          index
        ) => (
          <React.Fragment key={index}>
            {activeIndex !== null && index !== activeIndex && (
              <AccordionHeader
                hasBorderReset={index === activeIndex - 1}
                headline={headline}
                onClick={() => handleToggle(index)}
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
                onClick={() => handleToggle(index)}
              />
            )}
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default Accordion;
