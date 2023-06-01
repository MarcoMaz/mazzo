import Chip from "./Chip";

interface ChipGroup {
  chips: string[];
}

const ChipGroup: React.FC<ChipGroup> = ({ chips }) => {
  return (
    <>
      {chips.map((chip, index) => (
        <Chip key={index} label={chip} />
      ))}
    </>
  );
};

export default ChipGroup;
