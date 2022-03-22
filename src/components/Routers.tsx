import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Main from "../pages/Main";
import FallBack from "../pages/Fallback";
import Result from "../pages/Result";

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Routes>
        <Route path="/alpha" element={<FallBack />} />
      </Routes>
      <Routes>
        <Route path="/bravo" element={<FallBack />} />
      </Routes>
      <Routes>
        <Route path="/charlie" element={<FallBack />} />
      </Routes>
      <Routes>
        <Route path="/delta" element={<FallBack />} />
      </Routes>
      <Routes>
        <Route path="/echo" element={<FallBack />} />
      </Routes>
      <Routes>
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
