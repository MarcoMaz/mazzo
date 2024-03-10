import "./Heading.css";

import React from "react";

interface HeadingProps {
  level: number;
  label: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ level, label, className }) => {
  const combinedClassName = className ? `${"heading"} ${className}` : "heading";

  const HeadingTag = `h${level}`;

  return React.createElement(
    HeadingTag,
    { className: `${combinedClassName}` },
    label
  );
};

export default Heading;
