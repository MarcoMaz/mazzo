'use client';

import './AccordionNew.css';

import React, { useState } from 'react';

import { Circle } from 'react-feather';

interface AccordionItemNewProps {
  children: React.ReactNode;
  hasBorderReset?: boolean;
  headline: string;
  id: string;
  isActive?: boolean;
  onClick?: () => void;
}

const AccordionNewItem: React.FC<AccordionItemNewProps> = ({
  children,
  hasBorderReset = false,
  headline,
  id,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`accordionNewItem ${isActive ? '-active' : ''} ${hasBorderReset ? '-border-reset' : ''}`}
    >
      <h3 className='accordionNewItem__header'>
        <button
          id={`accordionNewItem__button-${id}`}
          className='accordionNewItem__button'
          type='button'
          aria-expanded={isActive}
          aria-controls={`accordionNewItem__panel-${id}`}
          onClick={onClick}
        >
          {headline}
        </button>
      </h3>
      <div
        id={`accordionNewItem__panel-${id}`}
        className='accordionNewItem__panel'
        aria-hidden={!isActive}
      >
        {children}
      </div>
      <div className='accordionNewItem__dot'>
        <Circle />
      </div>
    </div>
  );
};

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
