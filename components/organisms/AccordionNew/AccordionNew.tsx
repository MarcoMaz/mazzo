import React, { useState, useEffect, useRef } from 'react';
import './AccordionNew.css';

interface AccordionItemNewProps {
  id: string;
  title: string;
  content: string;
}

const AccordionNewItem: React.FC<
  AccordionItemNewProps & { isActive: boolean; onClick: () => void }
> = ({ id, title, content, isActive, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && contentRef.current) {
      contentRef.current.focus();
    }
  }, [isActive]);

  return (
    <div className='accordion-section'>
      <h3 className={`accordion-header ${isActive ? '' : 'collapsed'}`}>
        <button
          id={`sect${id}-button`}
          type='button'
          aria-expanded={isActive ? 'true' : 'false'}
          aria-controls={`sect${id}-panel`}
          onClick={onClick}
        >
          {title}
        </button>
      </h3>
      <div
        id={`sect${id}-panel`}
        className={`tab-panel ${isActive ? 'active' : ''}`}
        style={{ display: isActive ? 'block' : 'none' }}
        ref={contentRef}
        tabIndex={-1} // Allows the div to be focused
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

interface AccordionNewProps {
  items: AccordionItemNewProps[];
}

const AccordionNew: React.FC<AccordionNewProps> = ({ items }) => {
  // Initialize the first item as active
  const [activeItemId, setActiveItemId] = useState<string>(items[0]?.id || '');

  const handleAccordionClick = (id: string) => {
    // Ensure that an element is always open
    if (id !== activeItemId) {
      setActiveItemId(id);
    }
  };

  return (
    <div id='accordion'>
      {items.map((item) => (
        <AccordionNewItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          isActive={item.id === activeItemId}
          onClick={() => handleAccordionClick(item.id)}
        />
      ))}
    </div>
  );
};

export default AccordionNew;
