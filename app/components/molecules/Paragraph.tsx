import UnderlineSpan from "../atoms/UnderlineSpan";

interface ParagraphProps {
  text: string;
  underline?: string[];
}

const Paragraph: React.FC<ParagraphProps> = ({ text, underline }) => {
  const generateUnderlinedText = (text: string, underline: string[]) => {
    let currentIndex = 0;
    const underlinedText: JSX.Element[] = [];

    underline.forEach((term) => {
      const index = text.toLowerCase().indexOf(term.toLowerCase());
      if (index !== -1) {
        underlinedText.push(<>{text.substring(currentIndex, index)}</>);
        underlinedText.push(
          <UnderlineSpan key={`highlight-${currentIndex}`}>
            {text.substring(index, index + term.length)}
          </UnderlineSpan>
        );
        currentIndex = index + term.length;
      }
    });

    underlinedText.push(<>{text.substring(currentIndex)}</>);

    return underlinedText;
  };

  const underlinedText = generateUnderlinedText(text, underline || []);

  return <p>{underlinedText}</p>;
};

export default Paragraph;
