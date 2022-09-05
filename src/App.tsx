import React from 'react';
import Footer from './estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Navbar from './estaticos/navbar/Navbar';
import Sobrenos from "./paginas/sobrenos/Sobrenos";
import Found from './paginas/NotFound/Found'

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
        </Routes>
      </div>
      <Footer />
    </Router>

  );
};

export default App;
