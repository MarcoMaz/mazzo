"use client";

import styles from "./Hi.module.css";

import data from "../../../../public/assets/content/content.json";

import Heading from "../../atoms/Heading/Heading";
import Image from "next/image";
import ParagraphGroup from "../../organisms/ParagraphGroup/ParagraphGroup";
import { useEffect, useState } from "react";

const Hi: React.FC = () => {
  const { container, heading, image, paragraphGroup } = styles;

  const {
    headline,
    image: { url, alt },
    paragraphs,
  } = data.hi;

  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={container}>
      <Heading
        dataCy="hi-heading"
        level={1}
        label={headline}
        className={heading}
      />
      <Image
        className={image}
        data-cy="hi-image"
        src={url}
        alt={alt}
        width={viewportWidth >= 701 ? 300 : 200}
        height={viewportWidth >= 701 ? 300 : 200}
        priority
      />
      <ParagraphGroup
        className={paragraphGroup}
        dataCy="hi-paragraph-group"
        paragraphs={paragraphs}
      />
    </header>
  );
};

export default Hi;
