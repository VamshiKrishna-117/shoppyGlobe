// Entry point - wraps the App with Redux Provider for global state management
// Provider makes the Redux store available to all components in the tree
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provider wraps the entire app so any component can access the Redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
