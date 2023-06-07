export interface NavLinkProps {
  url: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ url, label }) => {
  return (
    <li>
      <a href={`#${url}`}>{label}</a>
    </li>
  );
};

export default NavLink;
