"use client";

import "./IntroSection.css";

import data from "../../../public/assets/content/content.json";

import Heading from "../../atoms/Heading/Heading";
import Image from "next/image";
import { useEffect, useState } from "react";
import Paragraph from "@/components/molecules/Paragraph/Paragraph";

const IntroSection: React.FC = () => {
  // const { container, avatar, heading, image, paragraphGroup } = styles;

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
    <header className="footer-section">
      <div 
      // className={avatar}
      >
        <Image
          // className={image}
          data-cy="hi-image"
          src={url}
          alt={alt}
          width={viewportWidth >= 701 ? 300 : 200}
          height={viewportWidth >= 701 ? 300 : 200}
          priority
        />

        <Heading
          level={1}
          label={headline}
          // className={heading}
        />
      </div>
      <div data-cy={"hi-paragraph-group"} 
      // className={paragraphGroup}
      >
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
