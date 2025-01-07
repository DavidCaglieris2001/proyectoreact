import './App.css';
import Header from './componentes/header/header';
import Footer from './componentes/footer/Footer';
import Secction from './componentes/secction/secction';
import Menu from './componentes/menu/menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListasCasas from './componentes/casas/ListaCasas';
import detalleCasas from './componentes/casas/detalleCasa';



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
            <Route path='/detalleCasas' element={<detalleCasas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
