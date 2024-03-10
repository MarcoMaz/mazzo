import styles from "./Chip.module.css";

interface ChipProps {
  label: string;
}

const Chip: React.FC<ChipProps> = ({ label }) => {
  return <span className={styles.container}>{label}</span>;
};

export default Chip;
