import styles from "./Hi.module.css";

import data from "../../../../public/assets/content/content.json";

// Components
import Heading from "../../atoms/Heading/Heading";
import Image from "next/image";
import ParagraphGroup from "../../organisms/ParagraphGroup/ParagraphGroup";

const Hi: React.FC = () => {
  const { heading, image, paragraphGroup } = styles;

  const {
    headline,
    image: { url, alt },
    paragraphs,
  } = data.hi;

  return (
    <header>
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
        width={200}
        height={200}
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
