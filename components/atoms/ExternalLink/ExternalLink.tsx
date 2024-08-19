import './ExternalLink.css';

interface ExternalLinkProps {
  ariaLabelledBy?: string;
  label: string;
  url: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  ariaLabelledBy,
  label,
  url,
}) => {
  return (
    <a
      aria-labelledby={ariaLabelledBy}
      href={url}
      target='_blank'
      className='external-link'
    >
      {label}
    </a>
  );
};

export default ExternalLink;
