import styles from "./ExternalLinkGroup.module.css";

import React from "react";
import ExternalLink from "../../atoms/ExternalLink/ExternalLink";

interface ExternalLinkGroupProps {
  dataCy: string;
  links: { label: string; url: string }[];
  className?: string;
}
const ExternalLinkGroup: React.FC<ExternalLinkGroupProps> = ({
  dataCy,
  links,
  className,
}) => {
  const combinedClassName = className
    ? `${styles.container} ${className}`
    : styles.container;

  return (
    <div data-cy={dataCy} className={combinedClassName}>
      {links.map(({ url, label }, index) => (
        <React.Fragment key={index}>
          <ExternalLink url={url} label={label} />
          {index !== links.length - 1 && <span> or </span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ExternalLinkGroup;
