import styles from "./ParagraphGroup.module.css";

import Paragraph from "../../molecules/Paragraph/Paragraph";

interface ParagraphGroupProps {
  dataCy: string;
  paragraphs: { text: string; underline?: string[] }[];
  className?: string;
}

const ParagraphGroup: React.FC<ParagraphGroupProps> = ({
  dataCy,
  paragraphs,
  className,
}) => {
  const combinedClassName = className
    ? `${styles.container} ${className}`
    : styles.container;

  return (
    <div data-cy={dataCy} className={combinedClassName}>
      {paragraphs.map((paragraph, index) => (
        <Paragraph
          key={index}
          text={paragraph.text}
          underline={paragraph.underline}
        />
      ))}
    </div>
  );
};

export default ParagraphGroup;
