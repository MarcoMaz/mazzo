import data from "../../../../public/assets/content/content.json";

import Heading from "../../atoms/Heading/Heading";
import CardGroup from "../../organisms/CardGroup";
import ImageGroup from "../../molecules/ImageGroup";
import ExternalLinkGroup from "../../molecules/ExternalLinkGroup";
import Accordion from "../../organisms/Accordion";

import styles from "./SelectedWorks.module.css";

const SelectedWorks = () => {
  const { headline, cards, nda, knowMore } = data.selectedWorks;

  return (
    <section className={styles.container}>
      <Heading dataCy="selected-works-heading" level={2} label={headline} />
      <Accordion dataCy="selected-works-accordion" cards={cards} />
      <CardGroup dataCy="selected-works-cards" cards={cards} />
      <Heading
        dataCy="selected-works-nda-heading"
        level={3}
        label={nda.headline}
      />
      <ImageGroup dataCy="selected-works-nda-images" images={nda.images} />
      <Heading
        dataCy="selected-works-know-more-heading"
        level={3}
        label={knowMore.headline}
      />
      <ExternalLinkGroup dataCy="selected-works-links" links={knowMore.CTA} />
    </section>
  );
};

export default SelectedWorks;
