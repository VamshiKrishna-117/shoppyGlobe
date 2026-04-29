// NotFound page - 404 error page for unknown routes
// useLocation gives access to the current URL info
import { useLocation, Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '4rem', color: 'var(--primary-color)', marginBottom: '10px' }}>404</h1>
      <h2 style={{ marginBottom: '20px' }}>Oops! Page Not Found</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
        The path <code style={{ backgroundColor: '#e0e0e0', padding: '4px 8px', borderRadius: '4px' }}>{location.pathname}</code> does not exist.
      </p>
      <Link 
        to="/" 
        style={{
          backgroundColor: 'var(--text-main)',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          fontWeight: '600'
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
