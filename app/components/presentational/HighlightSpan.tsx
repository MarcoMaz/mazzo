import { ReactNode } from "react";

interface HighlightSpanProps {
  children: ReactNode;
}

const HighlightSpan: React.FC<HighlightSpanProps> = ({ children }) => {
  return <span>{children}</span>;
};

export default HighlightSpan;
