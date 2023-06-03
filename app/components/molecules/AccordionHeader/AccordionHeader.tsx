import Dot from "../../atoms/Dot/Dot";
import styles from "./AccordionHeader.module.css";

interface AccordionHeaderProps {
  dataCy: string;
  headline: string;
  index: number;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  dataCy,
  headline,
  index,
}) => {
  return (
    <h3 data-cy={dataCy} className={styles.container}>
      <button
        type="button"
        aria-expanded="true"
        aria-controls={`sect${index}`}
        id={`accordion${index}id`}
      >
        <span>{headline}</span>
        <Dot />
      </button>
    </h3>
  );
};

export default AccordionHeader;
