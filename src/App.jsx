import './App.css';
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import Secction from './componentes/secction/Secction';
import Menu from './componentes/menu/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListasCasas from './componentes/casas/ListaCasas';
import DetalleCasa from './componentes/casas/DetalleCasa';
import Login from './componentes/login-register/login';
import Register from './componentes/login-register/register';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Menu />
        <main>
          <Routes>
            <Route path='/' element={<Secction />} />
            <Route path='/casas' element={<ListasCasas />} />
            <Route path='/DetalleCasas/:id' element={<DetalleCasa />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
