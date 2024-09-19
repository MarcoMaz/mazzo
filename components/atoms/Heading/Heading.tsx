import './Heading.css';

import React from 'react';

interface HeadingProps {
  id?: string | undefined;
  label: string;
  level: number;
}

const Heading: React.FC<HeadingProps> = ({ id, label, level = 1 }) => {
  const HeadingTag = `h${level}`;

  return React.createElement(
    HeadingTag,
    { className: 'heading', id: id },
    label
  );
};

export default Heading;
