interface ExternalLinkProps {
  address: string;
  label: string;
  dataCy?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ address, label, dataCy }) => {
  return (
    <a data-cy={dataCy} href={address} target="_blank">
      {label}
    </a>
  );
};

export default ExternalLink;
