import React from "react";
import ExternalLink from "../atoms/ExternalLink/ExternalLink";

interface ExternalLinkGroupProps {
  dataCy: string;
  links: { label: string; url: string }[];
}
const ExternalLinkGroup: React.FC<ExternalLinkGroupProps> = ({
  dataCy,
  links,
}) => {
  return (
    <div data-cy={dataCy}>
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
