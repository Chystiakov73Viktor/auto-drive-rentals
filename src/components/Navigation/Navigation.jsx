import { NavLink } from 'react-router-dom';
import { NavWrapper } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavWrapper>
      <NavLink className="navigation-link" to="/">
        Home
      </NavLink>
      <NavLink className="navigation-link" to="/catalog">
        Catalog
      </NavLink>
        <NavLink className="navigation-link" to="/favorites">
          Favorites
        </NavLink>
    </NavWrapper>
  );
};

export default Navigation;