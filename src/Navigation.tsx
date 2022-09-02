import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navBar">
    <Link to="/" className="link">
      Your Logo
    </Link>
    <ul>
      <li>Explore</li>
      <li>About Us</li>
      <li>Cities</li>
      <li>Call</li>
    </ul>
  </nav>
);

export default Navigation;
