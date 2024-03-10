// import Dot from "../../../../atoms/Dot/Dot";
import "./AccordionHeader.css";
import dotStyles from "../../../../atoms/Dot/Dot.module.css";

interface AccordionHeaderProps {
  headline: string;
  index: number;
  onClick?: () => void;
  className?: string;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  headline,
  index,
  onClick,
  className,
}) => {
  // const combinedClassName = className
  // ? `${styles.container} ${styles.borderReset}`
  // : styles.container;

  // const { button, heading, dot } = styles;

  return (
    <h3
      // className={combinedClassName}
      onClick={onClick}
    >
      <button
        // className={button}
        type="button"
      >
        <span
        // className={heading}
        >
          {headline}
        </span>
        {/* 
              THIS SHOULD BE "CIRCLE SELECTION"

        <Dot className={`${dot} ${dotStyles.empty}`} /> */}
      </button>
    </h3>
  );
};

export default AccordionHeader;
