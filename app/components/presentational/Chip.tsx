import { ReactNode } from "react";

interface ChipProps {
  label: string;
}

const Chip: React.FC<ChipProps> = ({ label }) => {
  return <span>{label}</span>;
};

export default Chip;
