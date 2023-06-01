import data from "../../../../public/assets/content/content.json";

import Heading from "../../presentational/Heading";

const SelectedWorks = () => {
  const { headline, nda, knowMore } = data.selectedWorks;

  return (
    <>
      <Heading
        dataCy="selected-works-heading"
        level={2}
        label={headline}
      />
      <Heading
        dataCy="selected-works-nda-heading"
        level={3}
        label={nda.headline}
      />
      <Heading
        dataCy="selected-works-know-more-heading"
        level={3}
        label={knowMore.headline}
      />
    </>
  );
};

export default SelectedWorks;
