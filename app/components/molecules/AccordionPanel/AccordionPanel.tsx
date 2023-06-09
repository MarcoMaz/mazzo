import styles from "./AccordionPanel.module.css";
import dotStyles from "../../atoms/Dot/Dot.module.css";

import ChipGroup from "../ChipGroup/ChipGroup";
import Dot from "../../atoms/Dot/Dot";
import ExternalLink from "../../atoms/ExternalLink/ExternalLink";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";

import { CardProps } from "../Card/Card";

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
  const { container, hide, heading, subheading, dot } = styles;

  const className = `${container}`;

  return (
    <div
      data-cy={dataCy}
      id={panelId}
      role="region"
      aria-labelledby={buttonId}
      className={className}
    >
      <div>
        <Heading level={4} label={headline} className={heading} />
        <Heading level={5} label={subheadline} className={subheading} />
        <Paragraph text={description} />
        <ChipGroup chips={chips} />
        <ExternalLink url={url} label={label} />
      </div>
      <Dot className={`${dot} ${dotStyles.full}`} />
    </div>
  );
};

export default AccordionPanel;
