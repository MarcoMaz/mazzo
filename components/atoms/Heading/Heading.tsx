import "./Heading.css";

import React from "react";

interface HeadingProps {
  dataCy?: string;
  level: number;
  label: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  dataCy,
  level,
  label,
  className,
}) => {
  const combinedClassName = className ? `${"heading"} ${className}` : "heading";

  const HeadingTag = `h${level}`;

  return React.createElement(
    HeadingTag,
    { "data-cy": dataCy, className: `${combinedClassName}` },
    label
  );
};

export default Heading;
