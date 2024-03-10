import styles from "./ChipGroup.module.css";

import Chip from "../../atoms/Chip/Chip";

interface ChipGroupProps {
  chips: string[];
}

const ChipGroup: React.FC<ChipGroupProps> = ({ chips }) => {
  return (
    <div className={styles.container}>
      {chips.map((chip, index) => (
        <Chip key={index} label={chip} />
      ))}
    </div>
  );
};

export default ChipGroup;
