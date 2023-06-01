import data from "../../../../public/assets/content/content.json";

import ExternalLinkGroup from "../../presentational/ExternalLinkGroup";

import Heading from "../../presentational/Heading";
import ImageGroup from "../../presentational/ImageGroup";

const SelectedWorks = () => {
  const { headline, nda, knowMore } = data.selectedWorks;

  return (
    <>
      <Heading dataCy="selected-works-heading" level={2} label={headline} />
      <Heading
        dataCy="selected-works-nda-heading"
        level={3}
        label={nda.headline}
      />
      <ImageGroup dataCy="selected-works-nda-images" images={nda.images} />
      <Heading
        dataCy="selected-works-know-more-heading"
        level={3}
        label={knowMore.headline}
      />
      <ExternalLinkGroup dataCy="selected-works-links" links={knowMore.CTA} />
    </>
  );
};

export default SelectedWorks;
