import styles from "./Paragraph.module.css";

import BoldSpan from "../../atoms/BoldSpan/BoldSpan";
import React from "react";

interface ParagraphProps {
  text: string;
  boldify?: string[];
}

const Paragraph: React.FC<ParagraphProps> = ({ text, boldify }) => {
  const generateBoldText = (text: string, boldify: string[]) => {
    let currentIndex = 0;
    const boldText: JSX.Element[] = [];

    boldify.forEach((term, index) => {
      const termIndex = text
        .toLowerCase()
        .indexOf(term.toLowerCase(), currentIndex);
      if (termIndex !== -1) {
        boldText.push(
          <React.Fragment key={`fragment-${index}`}>
            {text.substring(currentIndex, termIndex)}
          </React.Fragment>
        );
        boldText.push(
          <BoldSpan key={`highlight-${index}`}>
            {text.substring(termIndex, termIndex + term.length)}
          </BoldSpan>
        );
        currentIndex = termIndex + term.length;
      }
    });

    boldText.push(
      <React.Fragment key={`fragment-last`}>
        {text.substring(currentIndex)}
      </React.Fragment>
    );

    return boldText;
  };

  const boldText = generateBoldText(text, boldify || []);

  return <p className={styles.container}>{boldText}</p>;
};

export default Paragraph;
