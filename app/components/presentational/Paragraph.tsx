import { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p>{children}</p>;
};

export default Paragraph;
