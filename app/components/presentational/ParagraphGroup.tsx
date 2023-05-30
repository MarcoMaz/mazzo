import Paragraph from "./Paragraph";

interface ParagraphGroupProps {
  dataCy: string;
  paragraphs: string[];
}

const ParagraphGroup: React.FC<ParagraphGroupProps> = ({
  dataCy,
  paragraphs,
}) => {
  return (
    <div data-cy={dataCy}>
      {paragraphs.map((paragraph, index) => (
        <Paragraph key={index} text={paragraph} />
      ))}
    </div>
  );
};

export default ParagraphGroup;
