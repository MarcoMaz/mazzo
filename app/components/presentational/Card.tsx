import ChipGroup from "./ChipGroup";
import ExternalLink from "./ExternalLink";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface CardProps {
  headline: string;
  subheadline: string;
  description: string;
  chips: string[];
  CTA: {
    url: string;
    label: string;
  };
  dataCy: string;
}

const Card: React.FC<CardProps> = ({
  headline,
  subheadline,
  description,
  chips,
  CTA: { url, label },
  dataCy,
}) => {
  return (
    <div data-cy={dataCy}>
      <Heading level={3} label={headline} />
      <Heading level={4} label={subheadline} />
      <Paragraph text={description} />
      <ChipGroup chips={chips} />
      <ExternalLink url={url} label={label} />
    </div>
  );
};

export default Card;