import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BrinquedoPage from "../pages/BrinquedoPage";
import { BackgroundLayout } from "../layouts/BackgroundLayout";
import { AdmPage } from "../pages/AdmPage";
import { CatalogoPage } from "../pages/CatalogoPage";
import { SobrePage } from "../pages/SobrePage";

function App() {
  console.log("App renderizado");

  return (
    <Router>
      <Routes>
        <Route element={<BackgroundLayout />}>
          <Route path="/" element={<BrinquedoPage />} />
          <Route path="/catalogo" element={<CatalogoPage />} />
          <Route path="/administracao" element={<AdmPage />} />
          <Route path="/equipe" element={<SobrePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
