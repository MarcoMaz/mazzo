import "./DotGroup.css";

import { CardProps } from "../Card/Card";

interface DotsProps {
  dots: CardProps[];
  className?: string;
  activeIndex?: number;
  onClick?: (index: number) => void;
}

const Dots: React.FC<DotsProps> = ({
  dots,
  className,
  activeIndex,
  onClick,
}) => {
  // const combinedClassName = className
  //   ? `${styles.container} ${className}`
  //   : styles.container;

  const handleClick = (index: number) => {
    if (onClick) {
      onClick(index);
    }
  };

  return (
    <div className="dots">
      {dots.map((dot, index) => (
        <div
          key={index}
          className={
            index === activeIndex ? "dotStyles.full" : "dotStyles.empty"
          }
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Dots;

/*
DOT Legacy code

.container {
  border-radius: 50%;
  height: 1rem;
  margin-right: 1rem;
  width: 1rem;
}

.full {
  background-color: var(--colorBlack);
}

.empty {
  border: calc(2 / 16 * 1rem) solid var(--colorBlack);
}

*/
