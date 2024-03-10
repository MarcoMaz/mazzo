import styles from "./Dot.module.css";

interface DotProps {
  className?: string;
  onClick?: () => void;
}

const Dot: React.FC<DotProps> = ({ className, onClick }) => {
  const { container } = styles;

  return <div className={`${container} ${className ? className : ""}`} onClick={onClick}/>;
};

export default Dot;
