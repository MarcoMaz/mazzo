'use client';

import AccordionNewItem, {
  AccordionItemNewProps,
} from './AccordionNewItem/AccordionNewItem';

import React, { useState } from 'react';

interface AccordionNewProps {
  items: AccordionItemNewProps[];
}

const AccordionNew: React.FC<AccordionNewProps> = ({ items }) => {
  const [activeItemId, setActiveItemId] = useState<string>(items[0]?.id || '');

  const handleAccordionClick = (id: string) => {
    if (id !== activeItemId) {
      setActiveItemId(id);
    }
  };

  return (
    <div className='accordionNew'>
      {items.map(({ id, headline, children }) => (
        <AccordionNewItem
          key={id}
          id={id}
          headline={headline}
          hasBorderReset={+id === +activeItemId - 1}
          isActive={id === activeItemId}
          onClick={() => handleAccordionClick(id)}
        >
          {children}
        </AccordionNewItem>
      ))}
    </div>
  );
};

export default AccordionNew;
