import Heading from "../../presentational/Heading";
import Div from "../../presentational/Div";

const WriteMe = () => {
  return (
    <>
      <Heading dataCy="write-me-heading" level={2} label="Write me" />
      <Div dataCy="write-me-div">here</Div>
    </>
  );
};

export default WriteMe;
