import ChipGroup from "./ChipGroup";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import ExternalLink from "./ExternalLink";

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
            <div
              data-cy={`selected-works-accordion-panel-${headline}`}
              id={`sect${index}`}
              role="region"
              aria-labelledby={`accordion${index}id`}
            >
              <Heading level={4} label={headline} />
              <Heading level={5} label={subheadline} />
              <Paragraph text={description} />
              <ChipGroup chips={chips} />
              <ExternalLink url={url} label={label} />
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Accordion;
