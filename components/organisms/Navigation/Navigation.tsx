import './Navigation.css';

import NavLink, { NavLinkProps } from '../../atoms/NavLink/NavLink';

interface NavigationProps {
  navLinks: NavLinkProps[];
}

const Navigation: React.FC<NavigationProps> = ({ navLinks }) => {
  return (
    <nav className='navigation'>
      <ul>
        {navLinks.map(({ label, url }) => (
          <NavLink key={label} url={url} label={label} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
