import "./App.css";
import MainSlika from "./MainSlika";
import Portfolio from "./Portfolio";
import Title from "./Title";
import Info from "./Info";
import Kontakt from "./Kontakt";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Title />} />
          <Route path="/info" element={<Info />} />
          <Route path="kontakt" element={<Kontakt />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
