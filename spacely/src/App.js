import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/home/home";
import Details from "./pages/details/details";
import Constelation from "./pages/constelation/constelation";
import Notices from "./pages/notices/notices";
import Noticia1 from "./pages/notices/notice/noticia1";
import Noticia2 from "./pages/notices/notice/noticia2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/constelation" element={<Constelation />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/noticia1" element={<Noticia1 />} />
        <Route path="/noticia2" element={<Noticia2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
