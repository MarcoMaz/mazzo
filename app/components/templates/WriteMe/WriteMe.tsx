import data from "../../../../public/assets/content/content.json";

import Heading from "../../atoms/Heading/Heading";
import ExternalLink from "../../atoms/ExternalLink/ExternalLink";

import styles from "./WriteMe.module.css";

const WriteMe = () => {
  const {
    headline,
    CTA: { url, label },
  } = data.writeMe;

  return (
    <footer className={styles.container} id="write-me">
      <Heading dataCy="write-me-heading" level={2} label={headline} className={styles.headline} />
      <ExternalLink dataCy="write-me-cta" url={url} label={label} className={styles.link}/>
    </footer>
  );
};

export default WriteMe;
