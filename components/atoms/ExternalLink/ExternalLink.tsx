import './ExternalLink.css';

interface ExternalLinkProps {
  ariaLabelledBy?: string | undefined;
  ariaLabel?: string;
  label: string;
  url: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  ariaLabel,
  ariaLabelledBy,
  label,
  url,
}) => {
  return (
    <a
      aria-labelledby={ariaLabelledBy}
      aria-label={ariaLabel}
      href={url}
      target='_blank'
      className='external-link'
    >
      {label}
    </a>
  );
};

export default ExternalLink;
