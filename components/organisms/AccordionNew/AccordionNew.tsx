import './AccordionNew.css';

import React, { useCallback, useState } from 'react';

import { Circle } from 'react-feather';

interface AccordionItemNewProps {
  content: string;
  hasBorderReset?: boolean;
  id: string;
  isActive: boolean;
  title: string;
  onClick: () => void;
}

const AccordionNewItem: React.FC<AccordionItemNewProps> = ({
  content,
  hasBorderReset = false,
  id,
  isActive,
  title,
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
          {title}
        </button>
      </h3>
      <div
        id={`accordionNewItem__panel-${id}`}
        className='accordionNewItem__panel'
        aria-hidden={!isActive}
      >
        <p>{content}</p>
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
      {items.map(({ id, title, content }) => (
        <AccordionNewItem
          key={id}
          id={id}
          title={title}
          content={content}
          hasBorderReset={+id === +activeItemId - 1}
          isActive={id === activeItemId}
          onClick={() => handleAccordionClick(id)}
        />
      ))}
    </div>
  );
};

export default AccordionNew;
