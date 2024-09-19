import { Circle } from 'react-feather';

import './AccordionNewItem.css';

export interface AccordionItemNewProps {
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

export default AccordionNewItem;
