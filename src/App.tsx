import { Outlet } from 'react-router-dom';
import './index.css';
import Header from './components/Header/Header';
import MusicPlayer from './components/Player/MusicPlayer';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <MusicPlayer />
    </>
  );
}

export default App;
