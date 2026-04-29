// ProductDetail page - shows details for a single product
// useParams extracts dynamic route parameters (e.g., :id from /product/:id)
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // grab the product id from the URL

  return (
    <div>
      <h2>Product Detail</h2>
      <p>Showing product #{id}</p>
    </div>
  );
};

export default ProductDetail;
