import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/home/home";
import Details from "./pages/details/details";
import Constelation from "./pages/constelation/constelation";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/details" element={<Details />}/>
          <Route path="/constelation" element={<Constelation />}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
