import "./AccordionHeader.css";

import { Circle } from "react-feather";

interface AccordionHeaderProps {
  headline: string;
  onClick?: () => void;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  headline,
  onClick,
}) => {
  return (
    <h3 className="accordion-header" onClick={onClick}>
      <button className="accordion-header__button" type="button">
        <span className="accordion-header__heading">{headline}</span>
        <Circle />
      </button>
    </h3>
  );
};

export default AccordionHeader;
