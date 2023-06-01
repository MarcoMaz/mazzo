interface ExternalLinkProps {
  url: string;
  label: string;
  dataCy?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ url, label, dataCy }) => {
  return (
    <a data-cy={dataCy} href={url} target="_blank">
      {label}
    </a>
  );
};

export default ExternalLink;
