import Dot from "./Dot";
import { CardProps } from './Card';

interface DotGroupProps {
  dataCy: string;
  cards: CardProps[];
}

const DotGroup: React.FC<DotGroupProps> = ({ cards, dataCy }) => {
  return (
    <div data-cy={dataCy}>
      {cards.map((dot, index) => (
        <Dot key={index} />
      ))}
    </div>
  );
};

export default DotGroup;
