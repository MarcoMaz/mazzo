interface ExternalLinkProps {
  address: string;
  label: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ address, label }) => {
  return (
    <a href={address} target="_blank">
      {label}
    </a>
  );
};

export default ExternalLink;
