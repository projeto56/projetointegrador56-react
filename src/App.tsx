import React from 'react';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Navbar from './components/estaticos/navbar/Navbar';
import Sobrenos from "./paginas/sobrenos/Sobrenos";
import Found from './paginas/NotFound/Found';
import CadastroUsuario from './paginas/cadastrousuario/CadastroUsuario';
<<<<<<< .merge_file_a08452
=======

>>>>>>> .merge_file_a17860
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
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
        </Routes>
      </div>
      <Footer />
    </Router>

  );
};

export default App;
