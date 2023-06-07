import styles from "./NavLink.module.css";

export interface NavLinkProps {
  url: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ url, label }) => {
  const { container, link } = styles;

  return (
    <li className={container}>
      <a className={link} href={`#${url}`}>
        {label}
      </a>
    </li>
  );
};

export default NavLink;
