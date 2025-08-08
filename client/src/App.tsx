import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter.tsx';
import NavBar from './components/NavBar.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRouter />
      <NavBar />
    </BrowserRouter>
  );
};

export default App;