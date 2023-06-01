import data from "../../../../public/assets/content/content.json";

import Heading from "../../presentational/Heading";
import ExternalLink from "../../presentational/ExternalLink";

const WriteMe = () => {
  const {
    headline,
    CTA: { url, label },
  } = data.writeMe;

  return (
    <>
      <Heading dataCy="write-me-heading" level={2} label={headline} />
      <ExternalLink dataCy="write-me-cta" address={url} label={label} />
    </>
  );
};

export default WriteMe;
