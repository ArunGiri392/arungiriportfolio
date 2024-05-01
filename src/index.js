import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Assuming you have some global styles defined
import App from './App'; // Adjust the path if your App component is in a different folder

// Get the element where your React app will attach
const container = document.getElementById('root');

// Create a root for the app using the container
const root = createRoot(container);

// Render your App component to the DOM using the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you have a service worker and it's part of your project setup:
// import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';
// serviceWorker.unregister();
// reportWebVitals();
