import Heading from "../../presentational/Heading";
import Image from "next/image";

import data from "../../../../public/assets/content/content.json";

const Hi: React.FC = () => {
  return (
    <>
      <Heading level={1} label={data.hi.headline} />
      <Image
        src={data.hi.image.url}
        alt={data.hi.image.alt}
        width={200}
        height={200}
      />
    </>
  );
};

export default Hi;
