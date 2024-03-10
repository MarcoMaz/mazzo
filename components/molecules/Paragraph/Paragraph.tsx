import styles from "./Paragraph.module.css";

import UnderlineSpan from "../../atoms/UnderlineSpan/UnderlineSpan";
import React from "react";

interface ParagraphProps {
  text: string;
  underline?: string[];
}

const Paragraph: React.FC<ParagraphProps> = ({ text, underline }) => {
  const generateUnderlinedText = (text: string, underline: string[]) => {
    let currentIndex = 0;
    const underlinedText: JSX.Element[] = [];

    underline.forEach((term, index) => {
      const termIndex = text.toLowerCase().indexOf(term.toLowerCase(), currentIndex);
      if (termIndex !== -1) {
        underlinedText.push(<React.Fragment key={`fragment-${index}`}>{text.substring(currentIndex, termIndex)}</React.Fragment>);
        underlinedText.push(
          <UnderlineSpan key={`highlight-${index}`}>
            {text.substring(termIndex, termIndex + term.length)}
          </UnderlineSpan>
        );
        currentIndex = termIndex + term.length;
      }
    });

    underlinedText.push(<React.Fragment key={`fragment-last`}>{text.substring(currentIndex)}</React.Fragment>);

    return underlinedText;
  };

  const underlinedText = generateUnderlinedText(text, underline || []);

  return <p className={styles.container}>{underlinedText}</p>;
};

export default Paragraph;
