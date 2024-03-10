import NavLink, { NavLinkProps } from "../../atoms/NavLink/NavLink";

import "./Navigation.css";

interface NavigationProps {
  navLinks: NavLinkProps[];
}

const Navigation: React.FC<NavigationProps> = ({ navLinks }) => {
  const chunkArray = (array: NavLinkProps[], size: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  return (
    <nav className="navigation">
      <ul>
        {navLinks.map(({ label, url }) => (
          <NavLink key={label} url={url} label={label} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
