// ProductList component - fetches and displays all products
// Uses the custom hook useProductFetch for data fetching
// Renders a grid of ProductItem components
import useProductFetch from '../hooks/useProductFetch';
import ProductItem from './ProductItem';
import './ProductItem.css';

// API endpoint for fetching all products
const API_URL = 'https://dummyjson.com/products';

const ProductList = () => {
  // Fetch products using our custom hook
  const { data, loading, error } = useProductFetch(API_URL);

  // Temporary handler — will be replaced with Redux dispatch in Phase 5
  const handleAddToCart = (product) => {
    console.log('Add to cart:', product.title);
    alert(`${product.title} added to cart!`);
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
            key={product.id}       // unique key for each list item
            product={product}       // pass product data as prop
            onAddToCart={handleAddToCart}  // pass callback as prop
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
