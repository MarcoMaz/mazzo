import Heading from "../../presentational/Heading"

import data from "../../../../public/assets/content/content.json"
import Paragraph from "../../presentational/Paragraph"

const About: React.FC = () => {
  return(
    <>
      <Heading level={1} label={data.hi.headline}></Heading>
    </>
  )
}

export default About