import Link from "next/link";
import styles from "./NavLink.module.css";

export interface NavLinkProps {
  url: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ url, label }) => {
  const { container, link } = styles;

  return (
    <li className={container}>
      <Link className={link} href={url}>{label}</Link>
    </li>
  );
};

export default NavLink;
