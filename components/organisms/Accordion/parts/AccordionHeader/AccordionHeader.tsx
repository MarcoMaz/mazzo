import "./AccordionHeader.css";

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
        {/* THIS SHOULD BE "CIRCLE SELECTION" --> <Dot className={`${dot} ${dotStyles.empty}`} /> */}
      </button>
    </h3>
  );
};

export default AccordionHeader;
