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
  const headerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isActive && contentRef.current) {
      contentRef.current.focus(); // Focus on the panel when it becomes active
      if (headerRef.current) {
        headerRef.current.tabIndex = -1; // Make the header not focusable when the panel is active
      }
    } else if (headerRef.current) {
      headerRef.current.tabIndex = 0; // Restore the focusability of the header when the panel is closed
    }
  }, [isActive]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };

  return (
    <div className='accordion-section'>
      <h3 className={`accordion-header ${isActive ? '' : 'collapsed'}`}>
        <button
          id={`sect${id}-button`}
          type='button'
          aria-expanded={isActive ? 'true' : 'false'}
          aria-controls={`sect${id}-panel`}
          onClick={onClick}
          onKeyPress={handleKeyPress}
          ref={headerRef}
          tabIndex={0} // Set the default tabIndex to 0 (focusable)
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
  const [activeItemId, setActiveItemId] = useState<string>(items[0]?.id || '');

  const handleAccordionClick = (id: string) => {
    if (id !== activeItemId) {
      setActiveItemId(id);
    } else {
      setActiveItemId(''); // Close the panel if it's already open
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
