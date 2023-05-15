import { Outlet } from 'react-router-dom';
import './index.css';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
