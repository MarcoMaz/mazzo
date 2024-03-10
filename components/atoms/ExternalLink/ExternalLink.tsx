import "./ExternalLink.css";

interface ExternalLinkProps {
  url: string;
  label: string;
  className?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  label,
  className,
}) => {
  const combinedClassName = className
    ? `${"external-link"} ${className}`
    : "external-link";

  return (
    <a
      href={url}
      target="_blank"
      className={combinedClassName}
    >
      {label}
    </a>
  );
};

export default ExternalLink;
