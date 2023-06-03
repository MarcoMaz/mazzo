import styles from "./ExternalLink.module.css";

interface ExternalLinkProps {
  url: string;
  label: string;
  dataCy?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ url, label, dataCy }) => {
  return (
    <a data-cy={dataCy} href={url} target="_blank" className={styles.container}>
      {label}
    </a>
  );
};

export default ExternalLink;
