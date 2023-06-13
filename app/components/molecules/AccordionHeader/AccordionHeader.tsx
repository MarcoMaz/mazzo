import Dot from "../../atoms/Dot/Dot";
import styles from "./AccordionHeader.module.css";
import dotStyles from "../../atoms/Dot/Dot.module.css";

interface AccordionHeaderProps {
  dataCy: string;
  headline: string;
  index: number;
  onClick?: () => void;
  className?: string;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  dataCy,
  headline,
  index,
  onClick,
  className
}) => {
  const combinedClassName = className
  ? `${styles.container} ${styles.borderReset}`
  : styles.container;

  const { button, heading, dot } = styles;

  return (
    <h3 data-cy={dataCy} className={combinedClassName} onClick={onClick}>
      <button
        className={button}
        type="button"
        aria-expanded="true"
        aria-controls={`sect${index}`}
        id={`accordion${index}id`}
      >
        <span className={heading}>{headline}</span>
        <Dot className={`${dot} ${dotStyles.empty}`} />
      </button>
    </h3>
  );
};

export default AccordionHeader;
