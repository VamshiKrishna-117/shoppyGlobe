// Header component - displays navigation menu and cart icon
// Uses NavLink for active route highlighting
// Reads cart count from Redux store using useSelector
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../redux/cartSlice';
import './Header.css';

const Header = () => {
  // Read the total cart item count from Redux store
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="header">
      {/* Brand logo — links to home */}
      <NavLink to="/" className="header__logo">
        🛒 ShoppyGlobe
      </NavLink>

      {/* Navigation links */}
      <nav className="header__nav">
        <NavLink to="/" className="header__link" end>
          Home
        </NavLink>

        <NavLink to="/cart" className="header__link header__cart">
          Cart
          {/* Show badge only when there are items in the cart */}
          {cartCount > 0 && (
            <span className="header__cart-count">{cartCount}</span>
          )}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
