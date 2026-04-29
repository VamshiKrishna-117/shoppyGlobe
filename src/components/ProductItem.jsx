// ProductItem component - renders a single product card
// Props:
//   product (object) - product data from the API
//   onAddToCart (function) - callback when "Add to Cart" is clicked (wired to Redux in Phase 5)
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductItem.css';

const ProductItem = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  // Navigate to product detail page when image or title is clicked
  const handleViewDetail = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-item">
      {/* Product image — lazy loaded for performance */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-item__image"
        onClick={handleViewDetail}
        loading="lazy"
      />

      {/* Product info */}
      <div className="product-item__info">
        <span className="product-item__category">{product.category}</span>

        <h3 className="product-item__title" onClick={handleViewDetail}>
          {product.title}
        </h3>

        <span className="product-item__price">${product.price}</span>

        {/* Add to Cart button — calls the onAddToCart prop */}
        <button
          className="product-item__btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductItem;
