import styles from "./UnorderedList.module.css";

import NavLink, { NavLinkProps } from "../../atoms/NavLink/NavLink";

interface UnorderedListProps {
  listItems: NavLinkProps[];
}

const UnorderedList: React.FC<UnorderedListProps> = ({ listItems }) => {
  return (
    <ul className={styles.container}>
      {listItems.map(({ label, url }) => (
        <NavLink key={label} url={url} label={label} />
      ))}
    </ul>
  );
};

export default UnorderedList;
