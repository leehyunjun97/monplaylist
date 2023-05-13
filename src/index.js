import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/index';
import { RecoilRoot } from 'recoil';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
  // <React.StrictMode>

  // </React.StrictMode>
);
