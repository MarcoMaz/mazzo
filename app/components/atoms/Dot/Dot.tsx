import styles from "./Dot.module.css";

interface DotProps {
  className?: string;
}

const Dot: React.FC<DotProps> = ({ className }) => {
  const { container } = styles;

  return <div className={`${container} ${className ? className : ""}`} />;
};

export default Dot;
