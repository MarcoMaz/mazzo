import './Project.css';

import Heading from '../../../components/atoms/Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import ChipGroup from '../ChipGroup/ChipGroup';
import ExternalLink from '../../../components/atoms/ExternalLink/ExternalLink';
import { FunctionComponent } from 'react';

interface ProjectProps {
  headline: string;
  subheadline: string;
  description: string;
  chips: string[];
  CTA: {
    url: string;
    label: string;
  };
}

const Project: FunctionComponent<ProjectProps> = ({
  headline,
  subheadline,
  description,
  chips,
  CTA: { url, label },
}) => {
  return (
    <div className='project'>
      <Heading level={3} label={headline} />
      <Heading id='project-summary' level={4} label={subheadline} />
      <Paragraph text={description} />
      <ChipGroup chips={chips} />
      <ExternalLink ariaLabelledBy='project-summary' url={url} label={label} />
    </div>
  );
};

export default Project;
