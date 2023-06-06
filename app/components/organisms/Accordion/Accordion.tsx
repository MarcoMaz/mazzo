import styles from "./Accordion.module.css";

import AccordionHeader from "../../molecules/AccordionHeader/AccordionHeader";
import AccordionPanel from "../../molecules/AccordionPanel/AccordionPanel";

import { CardProps } from "../../molecules/Card/Card";

interface AccordionProps {
  dataCy: string;
  cards: CardProps[];
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ cards, dataCy, className }) => {
  const combinedClassName = className
    ? `${styles.container} ${className}`
    : styles.container;

  return (
    <div data-cy={dataCy} className={combinedClassName}>
      {cards.map(
        (
          { headline, subheadline, description, chips, CTA: { url, label } },
          index
        ) => (
          <>
            <AccordionHeader
              headline={headline}
              index={index}
              dataCy={`selected-works-accordion-group-${headline}`}
            />
            <AccordionPanel
              panelId={`sect${index}`}
              dataCy={`selected-works-accordion-panel-${headline}`}
              buttonId={`accordion${index}id`}
              headline={headline}
              subheadline={subheadline}
              description={description}
              chips={chips}
              CTA={{ url, label }}
            />
          </>
        )
      )}
    </div>
  );
};

export default Accordion;
