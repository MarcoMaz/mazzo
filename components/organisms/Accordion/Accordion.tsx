'use client';

import AccordionItem, {
  AccordionItemProps,
} from './AccordionItem/AccordionItem';

import React, { useState } from 'react';

interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeItemId, setActiveItemId] = useState<string>(items[0]?.id || '');

  const handleAccordionClick = (id: string) => {
    if (id !== activeItemId) {
      setActiveItemId(id);
    }
  };

  return (
    <div className='accordion'>
      {items.map(({ id, headline, children }) => (
        <AccordionItem
          key={id}
          id={id}
          headline={headline}
          hasBorderReset={+id === +activeItemId - 1}
          isActive={id === activeItemId}
          onClick={() => handleAccordionClick(id)}
        >
          {children}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
