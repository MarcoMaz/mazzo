import "./AccordionHeader.css";

import { Circle } from "react-feather";

interface AccordionHeaderProps {
  headline: string;
  hasBorderReset: boolean;
  onClick?: () => void;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  headline,
  hasBorderReset,
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
