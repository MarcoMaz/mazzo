import styles from "./ExternalLink.module.css";

interface ExternalLinkProps {
  url: string;
  label: string;
  dataCy?: string;
  className?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  label,
  dataCy,
  className,
}) => {
  const combinedClassName = className
    ? `${styles.container} ${className}`
    : styles.container;

  return (
    <a
      data-cy={dataCy}
      href={url}
      target="_blank"
      className={combinedClassName}
    >
      {label}
    </a>
  );
};

export default ExternalLink;
