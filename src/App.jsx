// App - root component that provides the router to the entire application
// RouterProvider connects our createBrowserRouter config to the React tree
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
