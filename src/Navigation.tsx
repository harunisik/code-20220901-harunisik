import { Link } from 'react-router-dom';
import useCheckMobileScreen from './useCheckMobileScreen';
import { ReactComponent as MenuIcon } from './menu-icon.svg';
import './styles/navbar.css';

const Navigation = () => {
  const isMobileView = useCheckMobileScreen(768);

  return (
    <nav className="navBar">
      <Link to="/" className="link">
        Your Logo
      </Link>
      {isMobileView ? (
        <MenuIcon />
      ) : (
        <ul>
          <li>Explore</li>
          <li>About Us</li>
          <li>Cities</li>
          <li>Call</li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
