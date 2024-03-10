import "./Heading.css";

import React from "react";

interface HeadingProps {
  label: string;
  level: number;
}

const Heading: React.FC<HeadingProps> = ({ label, level = 1 }) => {
  const HeadingTag = `h${level}`;

  return React.createElement(HeadingTag, { className: "heading" }, label);
};

export default Heading;
