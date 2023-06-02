import data from "../../../../public/assets/content/content.json";

import Heading from "../../atoms/Heading";
import ExternalLink from "../../atoms/ExternalLink";

import styles from "./WriteMe.module.css";

const WriteMe = () => {
  const {
    headline,
    CTA: { url, label },
  } = data.writeMe;

  return (
    <footer className={styles.container}>
      <Heading dataCy="write-me-heading" level={2} label={headline} />
      <ExternalLink dataCy="write-me-cta" url={url} label={label} />
    </footer>
  );
};

export default WriteMe;
