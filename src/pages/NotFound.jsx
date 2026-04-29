// NotFound page - 404 error page for unknown routes
// useLocation gives access to the current URL info
import { useLocation, Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>
        The path <code>{location.pathname}</code> does not exist.
      </p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
