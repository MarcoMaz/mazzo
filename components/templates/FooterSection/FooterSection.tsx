import data from "../../../public/assets/content/content.json";

import Heading from "../../atoms/Heading/Heading";
import ExternalLink from "../../atoms/ExternalLink/ExternalLink";

import "./FooterSection.css";

const FooterSection = () => {
  const {
    headline,
    CTA: { url, label },
  } = data.writeMe;

  return (
    <footer className="footer-section" id="contact">
      <Heading
        dataCy="write-me-heading"
        level={2}
        label={headline}
        // className={styles.headline}
      />
      <ExternalLink
        dataCy="write-me-cta"
        url={url}
        label={label}
        // className={styles.link}
      />
    </footer>
  );
};

export default FooterSection;
