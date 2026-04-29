// CartItem component - represents a single item in the shopping cart
// Dispatches Redux actions to update quantity or remove the item
// Props:
//   item (object) - cart item data { ...product, quantity }
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import PropTypes from 'prop-types';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // Increase quantity by 1
  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  // Decrease quantity by 1 (minimum is 1, enforced in the slice)
  const handleDecrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  // Remove item from cart entirely
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      {/* Product image */}
      <img
        src={item.thumbnail}
        alt={item.title}
        className="cart-item__image"
        loading="lazy"
      />

      {/* Product details */}
      <div className="cart-item__details">
        <h3 className="cart-item__title">{item.title}</h3>
        <span className="cart-item__price">${item.price} each</span>
      </div>

      {/* Quantity controls: - [qty] + */}
      <div className="cart-item__quantity">
        <button
          className="cart-item__qty-btn"
          onClick={handleDecrease}
          disabled={item.quantity <= 1}  // disable when quantity is 1
        >
          −
        </button>
        <span className="cart-item__qty-value">{item.quantity}</span>
        <button className="cart-item__qty-btn" onClick={handleIncrease}>
          +
        </button>
      </div>

      {/* Subtotal for this item */}
      <span className="cart-item__subtotal">
        ${(item.price * item.quantity).toFixed(2)}
      </span>

      {/* Remove button */}
      <button className="cart-item__remove" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
