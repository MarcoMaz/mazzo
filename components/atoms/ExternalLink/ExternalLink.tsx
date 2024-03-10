import "./ExternalLink.css";

interface ExternalLinkProps {
  url: string;
  label: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ url, label }) => {
  return (
    <a href={url} target="_blank" className="external-link">
      {label}
    </a>
  );
};

export default ExternalLink;
