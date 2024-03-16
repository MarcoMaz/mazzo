import "./AccordionHeader.css";

import { Circle } from "react-feather";

export interface AccordionHeaderProps {
  hasBorderReset: boolean;
  headline: string;
  onClick?: () => void;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  hasBorderReset,
  headline,
  onClick,
}) => {
  const accordionHeaderClassName = `accordion-header ${
    hasBorderReset ? "-border-reset" : ""
  }`;

  return (
    <h3 className={accordionHeaderClassName} onClick={onClick}>
      <button className="accordion-header__button" type="button">
        <span className="accordion-header__heading">{headline}</span>
        <Circle />
      </button>
    </h3>
  );
};

export default AccordionHeader;
