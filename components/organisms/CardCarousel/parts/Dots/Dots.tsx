import "./Dots.css";

import { Circle } from "react-feather";

import { CardProps } from "../Card/Card";

interface DotsProps {
  activeIndex?: number;
  dots: CardProps[];
  onClick?: (index: number) => void;
}

const Dots: React.FC<DotsProps> = ({
  activeIndex,
  dots,
  onClick,
}) => {

  const handleClick = (index: number) => {
    if (onClick) {
      onClick(index);
    }
  };

  return (
    <div className="dots">
      {dots.map((dot, index) => {
        const dotClassName = `dot${index === activeIndex ? " -full" : ""}`;
        return (
          <div
            key={index}
            className={dotClassName}
            onClick={() => handleClick(index)}
          >
            <Circle />
          </div>
        );
      })}
    </div>
  );
};

export default Dots;

