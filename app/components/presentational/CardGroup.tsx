import Card from "./Card";

interface CardGroupProps {
  dataCy: string;
  cards: {
    headline: string;
    subheadline: string;
    description: string;
    chips: string[];
    CTA: {
      url: string;
      label: string;
    };
  }[];
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
      <div data-cy="Dots">
        {cards.map((card, index) => (
          <div key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
