import data from "../../../public/assets/content/content.json";

import Heading from "../../atoms/Heading/Heading";
import CardGroup from "../../organisms/CardGroup/CardGroup";
import Accordion from "../../organisms/Accordion/Accordion";

import styles from "./SelectedWorksSection.module.css";
import ExternalLink from "@/components/atoms/ExternalLink/ExternalLink";
import React from "react";

import Image from "next/image";

const SelectedWorksSection = () => {
  const {
    container,
    heading,
    ndaHeading,
    ndaImages,
    knowMoreHeading,
    knowMoreCTA,
  } = styles;

  const { headline, cards, nda, knowMore } = data.selectedWorks;

  return (
    <section className={container} id="selected-works">
      <Heading
        dataCy="selected-works-heading"
        level={2}
        label={headline}
        className={heading}
      />
      <Accordion
        dataCy="selected-works-accordion"
        cards={cards}
        className={styles.accordion}
      />
      <CardGroup dataCy="selected-works-cards" cards={cards} />
      <Heading
        className={ndaHeading}
        dataCy="selected-works-nda-heading"
        level={3}
        label={nda.headline}
      />
      <div data-cy={"selected-works-nda-images"} className={ndaImages}>
        {nda.images.map(({ src, alt }) => (
          <Image
            className={styles.image}
            data-cy={src}
            src={src}
            alt={alt}
            key={src}
            height={45}
            width={150}
          />
        ))}
      </div>
      <Heading
        className={knowMoreHeading}
        dataCy="selected-works-know-more-heading"
        level={3}
        label={knowMore.headline}
      />
      {knowMore.CTA.map(({ url, label }, index) => (
        <React.Fragment key={index}>
          <ExternalLink url={url} label={label} />
          {index !== knowMore.CTA.length - 1 && <span> or </span>}
        </React.Fragment>
      ))}
    </section>
  );
};

export default SelectedWorksSection;
