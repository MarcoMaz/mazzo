import Paragraph from "../molecules/Paragraph";

interface ParagraphGroupProps {
  dataCy: string;
  paragraphs: { text: string; underline?: string[] }[];
}

const ParagraphGroup: React.FC<ParagraphGroupProps> = ({
  dataCy,
  paragraphs,
}) => {
  return (
    <div data-cy={dataCy}>
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
