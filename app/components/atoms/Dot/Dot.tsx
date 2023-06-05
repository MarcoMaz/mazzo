import styles from "./Dot.module.css";

const Dot: React.FC = () => {
  const { container, full } = styles;

  return <div className={`${container} ${full}`} />;
};

export default Dot;
