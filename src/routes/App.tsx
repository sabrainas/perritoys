import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BackgroundLayout } from "../layouts/BackgroundLayout";
import { AdmPage } from "../pages/AdmPage";
import { CatalogoPage } from "../pages/CatalogoPage";
import { SobrePage } from "../pages/SobrePage";
import BrinquedoPage from "../pages/BrinquedoPage"; // Detalhes do brinquedo
import HomePage from "../pages/HomePage";
import CadastroBrinquedos from "../layouts/CadastroBrinquedos";
import ViewToy from "../components/ViewToy";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<BackgroundLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogoPage />} />
          <Route path="/catalogo/:nome" element={<CatalogoPage />} /> 
          <Route path="/brinquedo/:id" element={<BrinquedoPage />} />
          <Route path="/administracao" element={<AdmPage />} />
          <Route path="/equipe" element={<SobrePage />} />
          <Route path="/cadastro" element={<CadastroBrinquedos />} /> 
          <Route path="/visualizar-brinquedo/:id" element={<ViewToy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
