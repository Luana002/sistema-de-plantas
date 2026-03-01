import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Cadastrar from './pages/CadastrarPlantas.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;