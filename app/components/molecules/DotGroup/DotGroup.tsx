import styles from "./DotGroup.module.css";

import Dot from "../../atoms/Dot/Dot";
import { CardProps } from "../Card/Card";

interface DotGroupProps {
  dataCy: string;
  dots: CardProps[];
  className?: string;
}

const DotGroup: React.FC<DotGroupProps> = ({ dots, dataCy, className }) => {
  const combinedClassName = className
    ? `${styles.container} ${className}`
    : styles.container;

  return (
    <div data-cy={dataCy} className={combinedClassName}>
      {dots.map((dot, index) => (
        <Dot key={index} />
      ))}
    </div>
  );
};

export default DotGroup;
