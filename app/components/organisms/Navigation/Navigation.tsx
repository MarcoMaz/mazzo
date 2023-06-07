import { NavLinkProps } from "../../atoms/NavLink/NavLink";

import UnorderedList from "../../molecules/UnorderedList/UnorderedList";

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
    <nav>
      {chunkedNavigation.map((chunk, index) => (
        <UnorderedList
          key={index}
          className={`ul-${index % 2 === 0 ? "top" : "bottom"}`}
          listItems={chunk}
        />
      ))}
    </nav>
  );
};

export default Navigation;
