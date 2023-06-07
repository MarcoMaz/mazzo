import { NavLinkProps } from "../../atoms/NavLink/NavLink";

interface UnorderedListProps {
  listItems: NavLinkProps[];
  className: string;
}

const UnorderedList: React.FC<UnorderedListProps> = ({
  listItems,
  className,
}) => {
  return (
    <ul className={className}>
      {listItems.map((item, index) => (
        <li key={index}>
          <a href={item.url}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default UnorderedList;
