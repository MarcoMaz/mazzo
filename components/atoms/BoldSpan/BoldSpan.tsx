import styles from "./BoldSpan.module.css";

import { ReactNode } from "react";

interface BoldSpanProps {
  children: ReactNode;
}

const BoldSpan: React.FC<BoldSpanProps> = ({ children }) => {
  return <span className={styles.container}>{children}</span>;
};

export default BoldSpan;
