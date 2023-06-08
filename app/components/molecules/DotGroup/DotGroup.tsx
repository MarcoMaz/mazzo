import styles from "./DotGroup.module.css";
import dotStyles from "../../atoms/Dot/Dot.module.css";

import Dot from "../../atoms/Dot/Dot";
import { CardProps } from "../Card/Card";

interface DotGroupProps {
  dataCy: string;
  dots: CardProps[];
  className?: string;
  activeIndex?: number;
}

const DotGroup: React.FC<DotGroupProps> = ({
  dots,
  dataCy,
  className,
  activeIndex,
}) => {
  const combinedClassName = className
    ? `${styles.container} ${className}`
    : styles.container;

  return (
    <div data-cy={dataCy} className={combinedClassName}>
      {dots.map((dot, index) => (
        <Dot
          key={index}
          className={index === activeIndex ? dotStyles.full : dotStyles.empty}
        />
      ))}
    </div>
  );
};

export default DotGroup;
