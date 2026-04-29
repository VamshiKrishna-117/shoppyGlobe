// ProductDetail page - shows detailed information about a selected product
// Fetches product data based on the :id route parameter
// Uses the same custom hook (useProductFetch) for data fetching
import { useParams, Link } from 'react-router-dom';
import useProductFetch from '../hooks/useProductFetch';
import './ProductDetail.css';

const ProductDetail = () => {
  // Extract the product ID from the URL (e.g., /product/5 → id = "5")
  const { id } = useParams();

  // Fetch single product details using the custom hook
  const { data: product, loading, error } = useProductFetch(
    `https://dummyjson.com/products/${id}`
  );

  // Temporary handler — will be replaced with Redux dispatch in Phase 5
  const handleAddToCart = () => {
    console.log('Add to cart:', product.title);
    alert(`${product.title} added to cart!`);
  };

  // Loading state
  if (loading) {
    return <div className="product-detail__loading">Loading product details...</div>;
  }

  // Error state
  if (error) {
    return (
      <div className="product-detail__error">
        <h3>Failed to load product</h3>
        <p>{error}</p>
      </div>
    );
  }

  // Guard: if product data is not available
  if (!product) return null;

  return (
    <div className="product-detail">
      {/* Back navigation link */}
      <Link to="/" className="product-detail__back">
        ← Back to Products
      </Link>

      <div className="product-detail__content">
        {/* Product image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-detail__image"
          loading="lazy"
        />

        {/* Product information */}
        <div className="product-detail__info">
          <span className="product-detail__category">{product.category}</span>
          <h1 className="product-detail__title">{product.title}</h1>
          <p className="product-detail__description">{product.description}</p>
          <span className="product-detail__price">${product.price}</span>

          {/* Rating */}
          <span className="product-detail__rating">
            ⭐ {product.rating} / 5
          </span>

          {/* Stock status */}
          <span
            className={`product-detail__stock ${
              product.stock < 10 ? 'product-detail__stock--low' : ''
            }`}
          >
            {product.stock > 0 ? `In Stock (${product.stock} left)` : 'Out of Stock'}
          </span>

          {/* Brand info */}
          {product.brand && (
            <span className="product-detail__category">Brand: {product.brand}</span>
          )}

          {/* Add to Cart button */}
          <button className="product-detail__btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
