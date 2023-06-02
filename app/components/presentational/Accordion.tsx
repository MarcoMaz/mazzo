import AccordionPanel from "./AccordionPanel";

import { CardProps } from "./Card";

interface AccordionProps {
  dataCy: string;
  cards: CardProps[];
}

const Accordion: React.FC<AccordionProps> = ({ cards, dataCy }) => {
  return (
    <div style={{ border: "1px solid" }} data-cy={dataCy}>
      {cards.map(
        (
          { headline, subheadline, description, chips, CTA: { url, label } },
          index
        ) => (
          <>
            <h3 data-cy={`selected-works-accordion-group-${headline}`}>
              <button
                type="button"
                aria-expanded="true"
                aria-controls={`sect${index}`}
                id={`accordion${index}id`}
              >
                <span>{headline}</span>
              </button>
            </h3>
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
