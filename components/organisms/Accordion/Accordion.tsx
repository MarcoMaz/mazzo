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
  const [activeIndex, setActiveIndex] = useState(0);

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
                headline={headline}
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
