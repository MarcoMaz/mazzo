"use client";

import "./Accordion.css";

import AccordionHeader from "./parts/AccordionHeader/AccordionHeader";
import AccordionPanel from "./parts/AccordionPanel/AccordionPanel";

import React, { useState } from "react";

interface AccordionItem {
  headline: string;
  children: React.ReactNode;
  buttonId: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {items.map(({ headline, children, buttonId }, index) => (
        <React.Fragment key={index}>
          {activeIndex !== null && index !== activeIndex && (
            <AccordionHeader
              hasBorderReset={index === activeIndex - 1}
              headline={headline}
              onClick={() => handleToggle(index)}
            />
          )}
          {index === activeIndex && (
            <AccordionPanel buttonId={buttonId}>{children}</AccordionPanel>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Accordion;
