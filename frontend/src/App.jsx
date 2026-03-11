import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import RegisterPlants from "./pages/RegisterPlants.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/RegisterPlants" element={<RegisterPlants />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;