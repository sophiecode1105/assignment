import { Route, Routes, Navigate } from "react-router-dom";
import FallBack from "../pages/Fallback";
import Result from "../pages/Result";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/result" replace />} />
      <Route path="/result" element={<Result />} />
      <Route path="/alpha" element={<FallBack />} />
      <Route path="/bravo" element={<FallBack />} />
      <Route path="/charlie" element={<FallBack />} />
      <Route path="/delta" element={<FallBack />} />
      <Route path="/echo" element={<FallBack />} />
    </Routes>
  );
};

export default Routers;
