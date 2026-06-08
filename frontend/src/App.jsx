import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Formulas from "./pages/Formulas/Formulas";
import Questoes from "./pages/Questoes/Questoes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/formulas" element={<Formulas />} />

        <Route path="/questoes" element={<Questoes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;