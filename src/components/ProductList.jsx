// ProductList component - fetches and displays all products
// Uses the custom hook useProductFetch for data fetching
// Dispatches addToCart action to Redux store
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import useProductFetch from '../hooks/useProductFetch';
import ProductItem from './ProductItem';
import './ProductItem.css';

// API endpoint for fetching all products
const API_URL = 'https://dummyjson.com/products';

const ProductList = () => {
  // Fetch products using our custom hook
  const { data, loading, error } = useProductFetch(API_URL);

  // useDispatch gives us access to dispatch Redux actions
  const dispatch = useDispatch();

  // Dispatch addToCart action when "Add to Cart" is clicked
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Show loading state while fetching
  if (loading) {
    return <div className="product-list__loading">Loading products...</div>;
  }

  // Show error state if fetch failed
  if (error) {
    return (
      <div className="product-list__error">
        <h3>Failed to load products</h3>
        <p>{error}</p>
      </div>
    );
  }

  // Render the product grid
  return (
    <div>
      <h2>Our Products</h2>
      <div className="product-list__grid">
        {data?.products?.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
