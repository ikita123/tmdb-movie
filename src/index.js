import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom'; // Import createRoot
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import { store } from './redux/store';
import { ToastContainer } from 'react-toastify'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const LazyApp = lazy(() => import('./App'));

// Use createRoot instead of ReactDOM.render
const root = document.getElementById('root');
const rootInstance = createRoot(root);

const AppContainer = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyApp />
        <ToastContainer newestOnTop />
      </Suspense>
    </Provider>
    
  );
};

// Render the app inside the root instance
rootInstance.render(<AppContainer />);
