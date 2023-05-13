import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
