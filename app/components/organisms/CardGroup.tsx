import Card, { CardProps } from "../molecules/Card";
import DotGroup from "../molecules/DotGroup/DotGroup";

interface CardGroupProps {
  dataCy: string;
  cards: CardProps[];
}

const CardGroup: React.FC<CardGroupProps> = ({ cards, dataCy }) => {
  return (
    <div data-cy={dataCy}>
      {cards.map(
        (
          { headline, subheadline, description, chips, CTA: { url, label } },
          index
        ) => (
          <Card
            headline={headline}
            subheadline={subheadline}
            description={description}
            chips={chips}
            CTA={{ url, label }}
            dataCy={headline}
            key={index}
          />
        )
      )}
      <DotGroup dots={cards} dataCy="Dots" />
    </div>
  );
};

export default CardGroup;
