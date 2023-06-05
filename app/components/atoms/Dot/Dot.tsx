import styles from "./Dot.module.css";

interface DotProps {
  className?: string;
}

const Dot: React.FC<DotProps> = ({ className }) => {
  const { container, full } = styles;

  return <div className={`${container} ${full} ${className ? className : ""}`} />;
};

export default Dot;
