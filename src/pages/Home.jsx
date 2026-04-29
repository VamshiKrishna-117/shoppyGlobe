// Home page - displays the product list
// This is the landing page of the application (route: "/")
import ProductList from '../components/ProductList';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Home = () => {
  useDocumentTitle('Home');

  return (
    <div>
      <ProductList />
    </div>
  );
};

export default Home;
