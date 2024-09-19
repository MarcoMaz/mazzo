import data from "../../../public/assets/content/content.json";

import Heading from "../../atoms/Heading/Heading";
import CardCarousel from "../../organisms/CardCarousel/CardCarousel";
import AccordionNew from "../../organisms/Accordion/Accordion";

import "./SelectedWorksSection.css";
import ExternalLink from "@/components/atoms/ExternalLink/ExternalLink";
import React from "react";

import Image from "next/image";

const SelectedWorksSection = () => {
  const { headline, nda, knowMore } = data.selectedWorks;

  return (
    <div className="selected-works-section" id="selected-works">
      <Heading level={2} label={headline} />
      <AccordionNew
        items={[
          {
            id: "accordion-item-1",
            hasBorderReset: true,
            headline: "Sample Title 1",
            children: <>Sample Content 1</>,
          },
          {
            id: "accordion-item-2",
            hasBorderReset: false,
            headline: "Sample Title 2",
            children: <>Sample Content 2</>,
          },
          {
            id: "accordion-item-3",
            hasBorderReset: false,
            headline: "Sample Title 3",
            children: <>Sample Content 3</>,
          },
        ]}
      />
    <CardCarousel>
      <>
        <h1>Heading 1</h1>
        <h2>SubHeading 1</h2>
        <p>This is some text</p>
      </>
      <>
        <h1>Heading 2</h1>
        <h2>SubHeading 2</h2>
        <p>This is some text</p>
      </>
      <>
        <h1>Heading 3</h1>
        <h2>SubHeading 3</h2>
        <p>This is some text</p>
      </>
      <>
        <h1>Heading 4</h1>
        <h2>SubHeading 4</h2>
        <p>This is some text</p>
      </>
    </CardCarousel>
      <Heading level={3} label={nda.headline} />
      <div data-cy={"selected-works-nda-images"}>
        {nda.images.map(({ src, alt }) => (
          <Image
            data-cy={src}
            src={src}
            alt={alt}
            key={src}
            height={45}
            width={150}
          />
        ))}
      </div>
      <Heading level={3} label={knowMore.headline} />
      {knowMore.CTA.map(({ url, label }, index) => (
        <React.Fragment key={index}>
          <ExternalLink url={url} label={label} />
          {index !== knowMore.CTA.length - 1 && <span> or </span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SelectedWorksSection;
