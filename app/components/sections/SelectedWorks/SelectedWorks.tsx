import data from "../../../../public/assets/content/content.json";
import Chip from "../../presentational/Chip";
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

      <div>
        {data.selectedWorks.cards.map(
          (
            { headline, subheadline, description, chips, CTA: { url, label } },
            index
          ) => (
            <div className="Card" key={index}>
              <Heading level={3} label={headline} />
              <Heading level={4} label={subheadline} />
              <Paragraph text={description} />
              {chips.map((chip, index) => (
                <Chip key={index} label={chip} />
              ))}
              <ExternalLink url={url} label={label} />
            </div>
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
