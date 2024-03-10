import "./AccordionPanel.css";
import dotStyles from "../../../../atoms/Dot/Dot.module.css";

import ChipGroup from "../../../../molecules/ChipGroup/ChipGroup";
// import Dot from "../../../../atoms/Dot/Dot";
import ExternalLink from "../../../../atoms/ExternalLink/ExternalLink";
import Heading from "../../../../atoms/Heading/Heading";
import Paragraph from "../../../../molecules/Paragraph/Paragraph";

import { CardProps } from "../../../CardCarousel/parts/Card/Card";

interface AccordionPanelProps extends CardProps {
  buttonId: string;
}

const AccordionPanel: React.FC<AccordionPanelProps> = ({
  headline,
  subheadline,
  description,
  chips,
  CTA: { url, label },
  buttonId,
}) => {
  // const { container, hide, heading, subheading, dot } = styles;

  // const className = `${container}`;

  return (
    <div
      role="region"
      aria-labelledby={buttonId}
      className="accordion-panel"
    >
      <div
      // className={styles.content}
      >
        <Heading
          level={3}
          label={headline}
          // className={heading}
        />
        <Heading
          level={4}
          label={subheadline}
          // className={subheading}
        />
        <Paragraph text={description} />
        <ChipGroup chips={chips} />
        <ExternalLink url={url} label={label} />
      </div>
      {/* 
      THIS SHOULD BE "CIRCLE SELECTION"
      <Dot className={`${dot} ${dotStyles.full}`} /> */}
    </div>
  );
};

export default AccordionPanel;
