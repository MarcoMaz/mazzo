import data from "../../../../public/assets/content/content.json";

// Components
import Heading from "../../atoms/Heading";
import Image from "next/image";
import ParagraphGroup from "../ParagraphGroup";

const Hi: React.FC = () => {
  const {
    headline,
    image: { url, alt },
    paragraphs,
  } = data.hi;

  return (
    <>
      <Heading dataCy="hi-heading" level={1} label={headline} />
      <Image
        data-cy="hi-image"
        src={url}
        alt={alt}
        width={200}
        height={200}
        priority
      />
      <ParagraphGroup dataCy="hi-paragraph-group" paragraphs={paragraphs} />
    </>
  );
};

export default Hi;
