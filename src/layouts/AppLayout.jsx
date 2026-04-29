// AppLayout - wraps all pages with the Header and shared layout structure
// Outlet renders the matched child route component
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const AppLayout = () => {
  return (
    <div>
      {/* Header with navigation — reads cart count from Redux store */}
      <Header />

      {/* Main content area — child routes render here */}
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
