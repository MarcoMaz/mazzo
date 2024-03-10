import NavLink, { NavLinkProps } from "../../atoms/NavLink/NavLink";

import styles from "./Navigation.module.css";

interface NavigationProps {
  navigationData: NavLinkProps[];
}

const Navigation: React.FC<NavigationProps> = ({ navigationData }) => {
  const chunkArray = (array: NavLinkProps[], size: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const chunkedNavigation = chunkArray(navigationData, 2);

  return (
    <nav className={styles.container}>
      <ul className={styles.container}>
        {navigationData.map(({ label, url }) => (
          <NavLink key={label} url={url} label={label} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
