import data from "../../../public/assets/content/content.json";

import Heading from "../../atoms/Heading/Heading";
import CardCarousel from "../../organisms/CardCarousel/CardCarousel";
import Accordion from "../../organisms/Accordion/Accordion";

import "./SelectedWorksSection.css";
import ExternalLink from "@/components/atoms/ExternalLink/ExternalLink";
import React from "react";

import Image from "next/image";

const SelectedWorksSection = () => {
  // const {
  //   container,
  //   heading,
  //   ndaHeading,
  //   ndaImages,
  //   knowMoreHeading,
  //   knowMoreCTA,
  // } = styles;

  const { headline, cards, nda, knowMore } = data.selectedWorks;

  return (
    <section className="selected-works-section" id="selected-works">
      <Heading
        level={2}
        label={headline}
        // className={heading}
      />
      <Accordion
        cards={cards}
        // className={styles.accordion}
      />
      <CardCarousel cards={cards} />
      <Heading
        // className={ndaHeading}
        level={3}
        label={nda.headline}
      />
      <div
        data-cy={"selected-works-nda-images"}
        // className={ndaImages}
      >
        {nda.images.map(({ src, alt }) => (
          <Image
            // className={styles.image}
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
        // className={knowMoreHeading}
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
