// ProductList component - fetches and displays all products
// Includes search bar that filters products using Redux search state
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { setSearchTerm, selectSearchTerm } from '../redux/searchSlice';
import useProductFetch from '../hooks/useProductFetch';
import ProductItem from './ProductItem';
import './ProductItem.css';
import './ProductList.css';

// API endpoint for fetching all products
const API_URL = 'https://dummyjson.com/products';

const ProductList = () => {
  // Fetch products using our custom hook
  const { data, loading, error } = useProductFetch(API_URL);

  const dispatch = useDispatch();

  // Read the current search term from Redux store
  const searchTerm = useSelector(selectSearchTerm);

  // Dispatch addToCart action when "Add to Cart" is clicked
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Update search term in Redux when user types
  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
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

  // Filter products based on search term (by title or category)
  const filteredProducts = data?.products?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  // Render the search bar and product grid
  return (
    <div>
      <h2>Our Products</h2>

      {/* Search bar — filters products in real-time via Redux state */}
      <div className="product-list__search">
        <input
          type="text"
          placeholder="Search products by name or category..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="product-list__search-input"
        />
      </div>

      {/* Show message if no products match the search */}
      {filteredProducts.length === 0 ? (
        <div className="product-list__no-results">
          <p>No products found for "<strong>{searchTerm}</strong>"</p>
        </div>
      ) : (
        <div className="product-list__grid">
          {filteredProducts.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
