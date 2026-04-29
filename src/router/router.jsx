// Router configuration using createBrowserRouter (modern React Router API)
// All page components are lazy-loaded for code splitting (React.lazy + Suspense)
import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppLayout from '../layouts/AppLayout';

// Lazy load all page components — they are loaded only when the user navigates to that route
const Home = lazy(() => import('../pages/Home'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const Cart = lazy(() => import('../pages/Cart'));
const Checkout = lazy(() => import('../pages/Checkout'));
const NotFound = lazy(() => import('../pages/NotFound'));

// SuspenseWrapper - shows a loading fallback while lazy components are being loaded
const SuspenseWrapper = ({ children }) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

// Define all application routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,      // Layout wrapper for all routes
    errorElement: (               // Catches any routing errors (404s)
      <SuspenseWrapper>
        <NotFound />
      </SuspenseWrapper>
    ),
    children: [
      {
        index: true,              // Default route for "/" 
        element: (
          <SuspenseWrapper>
            <Home />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'product/:id',     // Dynamic route — :id is extracted via useParams()
        element: (
          <SuspenseWrapper>
            <ProductDetail />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'cart',
        element: (
          <SuspenseWrapper>
            <Cart />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'checkout',
        element: (
          <SuspenseWrapper>
            <Checkout />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);

export default router;
