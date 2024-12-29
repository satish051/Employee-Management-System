import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import server from './mocks/server.js';


(async () => {
  if (process.env.NODE_ENV === 'development') {
    // const {server} = await import('./mocks/server.js')
    await server.start({ onUnhandledRequest: 'warn' });
  }


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
})();
