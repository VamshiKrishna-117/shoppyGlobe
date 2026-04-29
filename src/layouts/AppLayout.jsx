// AppLayout - wraps all pages with the Header and shared layout structure
// Outlet renders the matched child route component
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import '../App.css'; // Import layout styling

const AppLayout = () => {
  return (
    <div className="app-container">
      {/* Header with navigation — reads cart count from Redux store */}
      <Header />

      {/* Main content area — child routes render here */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
