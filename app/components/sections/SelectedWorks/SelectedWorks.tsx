import data from "../../../../public/assets/content/content.json";

import Heading from "../../presentational/Heading";

const SelectedWorks = () => {
  return (
    <>
      <Heading
        dataCy="selected-works-heading"
        level={2}
        label={data.selectedWorks.headline}
      />
    </>
  );
};

export default SelectedWorks;
