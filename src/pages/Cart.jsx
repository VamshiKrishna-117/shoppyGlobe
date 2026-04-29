// Cart page - displays all items added to the cart
// Reads cart state from Redux store using useSelector
// Shows cart items, total price, and links to checkout/continue shopping
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import './Cart.css';

const Cart = () => {
  // Read cart items and total from Redux store
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="cart cart--empty">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any products yet.</p>
        <Link to="/" className="cart__continue-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Shopping Cart ({cartItems.length} items)</h2>

      {/* List of cart items — each gets a unique key */}
      <div className="cart__items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Cart summary */}
      <div className="cart__summary">
        <div className="cart__total">
          <span>Total:</span>
          <span className="cart__total-price">${cartTotal.toFixed(2)}</span>
        </div>

        <div className="cart__actions">
          <Link to="/" className="cart__continue-btn">
            Continue Shopping
          </Link>
          <Link to="/checkout" className="cart__checkout-btn">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
