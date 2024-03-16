"use client";

import "./IntroSection.css";

import data from "../../../public/assets/content/content.json";

import Heading from "../../atoms/Heading/Heading";
import Image from "next/image";
import { useEffect, useState } from "react";
import Paragraph from "../../../components/molecules/Paragraph/Paragraph";

import avatarImage from "../../../public/assets/images/mm.jpeg";

const IntroSection: React.FC = () => {
  const { headline, paragraphs } = data.hi;

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

  const imageSizeBasedOnViewport = viewportWidth >= 701 ? 300 : 200;

  return (
    <header className="intro-section">
      <div className="intro-section__avatar">
        <Image
          src={avatarImage}
          alt={"avatar-picture"}
          width={imageSizeBasedOnViewport}
          height={imageSizeBasedOnViewport}
          priority
        />
        <Heading level={1} label={headline} />
      </div>
      <div className="intro-section__paragraphGroup">
        {paragraphs.map((paragraph, index) => (
          <Paragraph
            key={index}
            text={paragraph.text}
            boldify={paragraph.boldify}
          />
        ))}
      </div>
    </header>
  );
};

export default IntroSection;
