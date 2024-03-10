import "./BoldSpan.css";

import { ReactNode } from "react";

interface BoldSpanProps {
  children: ReactNode;
}

const BoldSpan: React.FC<BoldSpanProps> = ({ children }) => {
  return <span className="bold-span">{children}</span>;
};

export default BoldSpan;
