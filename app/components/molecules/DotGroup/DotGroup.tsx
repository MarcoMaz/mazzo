import styles from "./DotGroup.module.css";

import Dot from "../../atoms/Dot/Dot";
import { CardProps } from "../Card";

interface DotGroupProps {
  dataCy: string;
  dots: CardProps[];
}

const DotGroup: React.FC<DotGroupProps> = ({ dots, dataCy }) => {
  return (
    <div data-cy={dataCy} className={styles.container}>
      {dots.map((dot, index) => (
        <Dot key={index} />
      ))}
    </div>
  );
};

export default DotGroup;
