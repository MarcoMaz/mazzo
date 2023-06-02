import AccordionHeader from "../molecules/AccordionHeader";
import AccordionPanel from "../molecules/AccordionPanel";

import { CardProps } from "../molecules/Card";

interface AccordionProps {
  dataCy: string;
  cards: CardProps[];
}

const Accordion: React.FC<AccordionProps> = ({ cards, dataCy }) => {
  return (
    <div data-cy={dataCy}>
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
