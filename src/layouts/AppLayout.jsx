// AppLayout - wraps all pages with a shared Header and layout structure
// Outlet renders the matched child route component
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <header>
        <h1>ShoppyGlobe</h1>
        {/* Header component will replace this in Phase 3 */}
      </header>
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
    </div>
  );
};

export default AppLayout;
