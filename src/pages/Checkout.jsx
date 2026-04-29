// Checkout page - collects user details and shows order summary
// On "Place Order": shows success message, clears cart, redirects to Home
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { selectCartItems, selectCartTotal, clearCart } from '../redux/cartSlice';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './Checkout.css';

const Checkout = () => {
  useDocumentTitle('Checkout');

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form state for user details (dummy form)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    phone: '',
  });

  // Track whether order has been placed
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Update form field values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Show success message
    setOrderPlaced(true);

    // Clear the cart
    dispatch(clearCart());

    // Redirect to Home after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  // If cart is empty and no order was just placed, show empty state
  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="checkout checkout--empty">
        <h2>Your cart is empty</h2>
        <p>Add some products before checking out.</p>
        <Link to="/">Go Shopping</Link>
      </div>
    );
  }

  // Show success message after order is placed
  if (orderPlaced) {
    return (
      <div className="checkout checkout__success">
        <h2>✅ Order Placed Successfully!</h2>
        <p>Thank you for shopping with ShoppyGlobe.</p>
        <p>Redirecting to Home page...</p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <div className="checkout__content">
        {/* User details form */}
        <form className="checkout__form" onSubmit={handlePlaceOrder}>
          <h3>Shipping Details</h3>

          <div className="checkout__field">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="checkout__field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="checkout__field">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="checkout__field">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="checkout__field">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          {/* Place Order button */}
          <button type="submit" className="checkout__place-btn">
            Place Order
          </button>
        </form>

        {/* Order summary */}
        <div className="checkout__summary">
          <h3>Order Summary</h3>

          {/* List each cart item with name, qty, and subtotal */}
          {cartItems.map((item) => (
            <div key={item.id} className="checkout__summary-item">
              <span>{item.title} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          {/* Total */}
          <div className="checkout__summary-total">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
