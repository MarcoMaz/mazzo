import Link from "next/link";
import "./NavLink.css";

export interface NavLinkProps {
  url: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ url, label }) => {
  return (
    <li className="nav-link">
      <Link href={url}>{label}</Link>
    </li>
  );
};

export default NavLink;
