"use client";

import styles from "./Accordion.module.css";

import AccordionHeader from "../../molecules/AccordionHeader/AccordionHeader";
import AccordionPanel from "../../molecules/AccordionPanel/AccordionPanel";

import { CardProps } from "../../molecules/Card/Card";
import { useState } from "react";
import React from "react";

interface AccordionProps {
  dataCy: string;
  cards: CardProps[];
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ cards, dataCy, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const combinedClassName = className
    ? `${styles.container} ${className}`
    : styles.container;

  return (
    <div data-cy={dataCy} className={combinedClassName}>
      {cards.map(
        (
          { headline, subheadline, description, chips, CTA: { url, label } },
          index
        ) => (
          <React.Fragment key={index}>
            {index !== activeIndex && (
              <AccordionHeader
                headline={headline}
                index={index}
                dataCy={`selected-works-accordion-group-${headline}`}
              />
            )}
            {index === activeIndex && (
              <AccordionPanel
                panelId={`sect${index}`}
                dataCy={`selected-works-accordion-panel-${headline}`}
                buttonId={`accordion${index}id`}
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
