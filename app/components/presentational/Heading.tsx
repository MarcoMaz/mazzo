import React from "react";

interface HeadingProps {
  level: number;
  label: string;
}

const Heading: React.FC<HeadingProps> = ({ level, label }) => {
  const HeadingTag = `h${level}`;

  return React.createElement(HeadingTag, null, label);
};

export default Heading;
