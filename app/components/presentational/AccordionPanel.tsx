import ChipGroup from "./ChipGroup";
import ExternalLink from "./ExternalLink";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

import { CardProps } from "./Card";

interface AccordionPanelProps extends CardProps {
  dataCy: string;
  buttonId: string;
  panelId: string;
}

const AccordionPanel: React.FC<AccordionPanelProps> = ({
  headline,
  subheadline,
  description,
  chips,
  CTA: { url, label },
  panelId,
  dataCy,
  buttonId,
}) => {
  return (
    <div data-cy={dataCy} id={panelId} role="region" aria-labelledby={buttonId}>
      <Heading level={4} label={headline} />
      <Heading level={5} label={subheadline} />
      <Paragraph text={description} />
      <ChipGroup chips={chips} />
      <ExternalLink url={url} label={label} />
    </div>
  );
};

export default AccordionPanel;
