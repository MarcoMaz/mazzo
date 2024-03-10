import "./Card.css";

import ChipGroup from "../../../../molecules/ChipGroup/ChipGroup";
import ExternalLink from "../../../../atoms/ExternalLink/ExternalLink";
import Heading from "../../../../atoms/Heading/Heading";
import Paragraph from "../../../../molecules/Paragraph/Paragraph";

export interface CardProps {
  headline: string;
  subheadline: string;
  description: string;
  chips: string[];
  CTA: {
    url: string;
    label: string;
  };
}

const Card: React.FC<CardProps> = ({
  headline,
  subheadline,
  description,
  chips,
  CTA: { url, label },
}) => {
  return (
    <div className="card">
      <Heading level={3} label={headline} />
      <Heading level={4} label={subheadline} />
      <Paragraph text={description} />
      <ChipGroup chips={chips} />
      <ExternalLink url={url} label={label} />
    </div>
  );
};

export default Card;
