import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import FallBack from "../pages/Fallback";
import Result from "../pages/Result";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/alpha" element={<FallBack />} />
      <Route path="/bravo" element={<FallBack />} />
      <Route path="/charlie" element={<FallBack />} />
      <Route path="/delta" element={<FallBack />} />
      <Route path="/echo" element={<FallBack />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

export default Routers;
