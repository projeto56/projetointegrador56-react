import React from 'react';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Navbar from './components/estaticos/navbar/Navbar';
import Sobrenos from "./paginas/sobrenos/Sobrenos";
import Found from './paginas/NotFound/Found';
import CadastroUsuario from './paginas/cadastrousuario/CadastroUsuario';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListaTema from './components/temas/listaTema/ListaTema';
import { Provider } from 'react-redux';
import store from './store/store';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';


function App() {
  return (
   <Provider store={store}>
   <Router>
      <Navbar />
      <div style={{ minHeight: '76vh'  }} >
        <Routes> 
          <Route path="*" element={<Found />}  />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/sobrenos' element={<Sobrenos/>}/>
          <Route path='/cadastrousuario' element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
};

export default App;
