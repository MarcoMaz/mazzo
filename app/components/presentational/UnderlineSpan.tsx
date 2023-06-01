import { ReactNode } from "react";

interface UnderlineSpanProps {
  children: ReactNode;
}

const UnderlineSpan: React.FC<UnderlineSpanProps> = ({ children }) => {
  return <span>{children}</span>;
};

export default UnderlineSpan;
