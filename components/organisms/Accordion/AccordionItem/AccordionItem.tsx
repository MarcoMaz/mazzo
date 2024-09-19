import { Circle } from 'react-feather';

import './AccordionItem.css';

export interface AccordionItemProps {
  children: React.ReactNode;
  hasBorderReset?: boolean;
  headline: string;
  id: string;
  isActive?: boolean;
  onClick?: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  hasBorderReset = false,
  headline,
  id,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`accordionItem ${isActive ? '-active' : ''} ${hasBorderReset ? '-border-reset' : ''}`}
    >
      <h3 className='accordionItem__header'>
        <button
          id={`accordionItem__button-${id}`}
          className='accordionItem__button'
          type='button'
          aria-expanded={isActive}
          aria-controls={`accordionItem__panel-${id}`}
          onClick={onClick}
        >
          {headline}
        </button>
      </h3>
      <div
        id={`accordionItem__panel-${id}`}
        className='accordionItem__panel'
        aria-hidden={!isActive}
      >
        {children}
      </div>
      <div className='accordionItem__dot'>
        <Circle />
      </div>
    </div>
  );
};

export default AccordionItem;
