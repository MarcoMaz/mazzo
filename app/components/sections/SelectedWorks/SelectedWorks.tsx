import data from "../../../../public/assets/content/content.json";
import Card from "../../presentational/Card";
import ChipGroup from "../../presentational/ChipGroup";
import ExternalLink from "../../presentational/ExternalLink";

import ExternalLinkGroup from "../../presentational/ExternalLinkGroup";

import Heading from "../../presentational/Heading";
import ImageGroup from "../../presentational/ImageGroup";
import Paragraph from "../../presentational/Paragraph";

const SelectedWorks = () => {
  const { headline, nda, knowMore } = data.selectedWorks;

  return (
    <>
      <Heading dataCy="selected-works-heading" level={2} label={headline} />

      <div data-cy="selected-works-cards">
        {data.selectedWorks.cards.map(
          (
            { headline, subheadline, description, chips, CTA: { url, label } },
            index
          ) => (
            <Card
              headline={headline}
              subheadline={subheadline}
              description={description}
              chips={chips}
              CTA={{ url, label }}
              dataCy={headline}
              key={index}
            />
          )
        )}
      </div>

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
