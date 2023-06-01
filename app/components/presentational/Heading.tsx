import React from "react";

interface HeadingProps {
  dataCy?: string;
  level: number;
  label: string;
}

const Heading: React.FC<HeadingProps> = ({ dataCy, level, label }) => {
  const HeadingTag = `h${level}`;

  return React.createElement(HeadingTag, { "data-cy": dataCy }, label);
};

export default Heading;
