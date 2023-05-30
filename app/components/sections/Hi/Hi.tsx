import data from "../../../../public/assets/content/content.json";

// Components
import Heading from "../../presentational/Heading";
import Image from "next/image";
import ParagraphGroup from "../../presentational/ParagraphGroup";

const Hi: React.FC = () => {
  return (
    <>
      <Heading dataCy="hi-heading" level={1} label={data.hi.headline} />
      <Image
        data-cy="hi-image"
        src={data.hi.image.url}
        alt={data.hi.image.alt}
        width={200}
        height={200}
        priority
      />
      <ParagraphGroup
        dataCy="hi-paragraph-group"
        paragraphs={data.hi.paragraphs}
      />
    </>
  );
};

export default Hi;
