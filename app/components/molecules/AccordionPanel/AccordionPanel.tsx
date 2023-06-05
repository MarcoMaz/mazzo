import styles from "./AccordionPanel.module.css";

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

  const className = `${styles.container} ${styles.hide}`;

  return (
    <div
      data-cy={dataCy}
      id={panelId}
      role="region"
      aria-labelledby={buttonId}
      className={className}
    >
      <div>
        <Heading level={4} label={headline} />
        <Heading level={5} label={subheadline} />
        <Paragraph text={description} />
        <ChipGroup chips={chips} />
        <ExternalLink url={url} label={label} />
      </div>
      <Dot />
    </div>
  );
};

export default AccordionPanel;
