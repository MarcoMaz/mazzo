import './AccordionItem.css';

import { Circle } from 'react-feather';

export interface AccordionItemProps {
  children: string;
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
        dangerouslySetInnerHTML={{ __html: children }}
      />
      <div className='accordionItem__dot'>
        <Circle />
      </div>
    </div>
  );
};

export default AccordionItem;
