import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("./pages/Home/Home"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const Favorite = lazy(() => import("./pages/Favorite/Favorite"));

function App() {
  const location = useLocation();
  const pathSegments = location.pathname;

  return (
    <div className={pathSegments === "/" ? "homeContainer " : ""}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorite />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
