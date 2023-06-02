import Chip from "../atoms/Chip";

interface ChipGroupProps {
  chips: string[];
}

const ChipGroup: React.FC<ChipGroupProps> = ({ chips }) => {
  return (
    <>
      {chips.map((chip, index) => (
        <Chip key={index} label={chip} />
      ))}
    </>
  );
};

export default ChipGroup;
