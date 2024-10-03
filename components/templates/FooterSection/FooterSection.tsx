import data from '../../../public/assets/content/content.json';

import Heading from '../../atoms/Heading/Heading';
import ExternalLink from '../../atoms/ExternalLink/ExternalLink';

import './FooterSection.css';

const FooterSection: React.FC = () => {
  const {
    headline,
    CTA: { ariaLabel, label, url },
  } = data.writeMe;

  return (
    <footer className='footer-section' id='contact'>
      <Heading level={2} label={headline} />
      <ExternalLink ariaLabel={ariaLabel} url={url} label={label} />
    </footer>
  );
};

export default FooterSection;
