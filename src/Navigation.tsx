import { Link } from 'react-router-dom';
import useCheckMobileScreen from './useCheckMobileScreen';

const Navigation = () => {
  const isMobile = useCheckMobileScreen(768);

  return (
    <nav className="navBar">
      <Link to="/" className="link">
        Your Logo
      </Link>
      {isMobile ? (
        <div></div>
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
