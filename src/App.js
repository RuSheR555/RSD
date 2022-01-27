import "./App.css";
import MainSlika from "./MainSlika";
import Portfolio from "./Portfolio";
import Title from "./Title";
import Info from "./Info";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Title />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
