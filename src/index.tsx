import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/index';
import { RecoilRoot } from 'recoil';
import Playlist from './pages/playlist';
import { QueryClient, QueryClientProvider } from 'react-query';
import MyPlayList from './pages/myPlaylist';
import OtherSearch from './pages/otherSearch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'playlist',
        element: <Playlist />,
      },
      {
        path: 'myPlaylist',
        element: <MyPlayList />,
      },
      {
        path: 'search',
        element: <OtherSearch />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
