import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Categories</Link>
    <Link to="/products">All Products</Link>
  </nav>
);

export default Navbar;