import styles from "./CardGroup.module.css";

import Card, { CardProps } from "../../molecules/Card/Card";
import DotGroup from "../../molecules/DotGroup/DotGroup";

interface CardGroupProps {
  dataCy: string;
  cards: CardProps[];
}

const CardGroup: React.FC<CardGroupProps> = ({ cards, dataCy }) => {
  return (
    <>
      <div data-cy={dataCy} className={styles.container}>
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
      </div>
      <DotGroup dots={cards} dataCy="Dots" />
    </>
  );
};

export default CardGroup;