import "./AccordionPanel.css";

import ExternalLink from "../../../../atoms/ExternalLink/ExternalLink";
import ChipGroup from "../../../../molecules/ChipGroup/ChipGroup";
import Heading from "../../../../atoms/Heading/Heading";
import Paragraph from "../../../../molecules/Paragraph/Paragraph";

import { CardProps } from "../../../CardCarousel/parts/Card/Card";

import { Circle } from 'react-feather';

interface AccordionPanelProps extends CardProps {
  buttonId: string;
  onClick?: () => void;
}

const AccordionPanel: React.FC<AccordionPanelProps> = ({
  headline,
  subheadline,
  description,
  chips,
  CTA: { url, label },
  buttonId,
}) => {
  return (
    <div role="region" aria-labelledby={buttonId} className="accordion-panel">
      <div className="accordion-panel__content">
        <Heading level={3} label={headline} />
        <Heading level={4} label={subheadline} />
        <Paragraph text={description} />
        <ChipGroup chips={chips} />
        <ExternalLink url={url} label={label} />
      </div>
      <Circle />
    </div>
  );
};

export default AccordionPanel;
