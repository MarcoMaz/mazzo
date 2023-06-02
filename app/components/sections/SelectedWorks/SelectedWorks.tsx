import data from "../../../../public/assets/content/content.json";

import Heading from "../../presentational/Heading";
import CardGroup from "../../presentational/CardGroup";
import ImageGroup from "../../presentational/ImageGroup";
import ExternalLinkGroup from "../../presentational/ExternalLinkGroup";
import Accordion from "../../presentational/Accordion";

const SelectedWorks = () => {
  const { headline, cards, nda, knowMore } = data.selectedWorks;

  return (
    <>
      <Heading dataCy="selected-works-heading" level={2} label={headline} />
      <Accordion />
      <CardGroup dataCy="selected-works-cards" cards={cards} />
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
