import styles from "./UnderlineSpan.module.css";

import { ReactNode } from "react";

interface UnderlineSpanProps {
  children: ReactNode;
}

const UnderlineSpan: React.FC<UnderlineSpanProps> = ({ children }) => {
  return <span className={styles.container}>{children}</span>;
};

export default UnderlineSpan;
