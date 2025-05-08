import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BackgroundLayout } from "../layouts/BackgroundLayout";
import { AdmPage } from "../pages/AdmPage";
import { CatalogoPage } from "../pages/CatalogoPage";
import { SobrePage } from "../pages/SobrePage";
import BrinquedoPage from "../pages/BrinquedoPage"; 
import HomePage from "../pages/HomePage";
import CadastroBrinquedos from "../layouts/CadastroBrinquedos";
import ViewToy from "../components/ViewToy";
import { CategoriaPage } from "../pages/CategoriaPage";
import ViewToyCategory from "../components/ViewToyCategory";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<BackgroundLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogoPage />} />
          <Route path="/catalogo/:nome" element={<CategoriaPage />} /> 
          <Route path="/brinquedo/:id" element={<BrinquedoPage />} />
          <Route path="/administracao" element={<AdmPage />} />
          <Route path="/equipe" element={<SobrePage />} />
          <Route path="/cadastro" element={<CadastroBrinquedos />} />
          <Route path="/cadastro/:codigo" element={<CadastroBrinquedos />} /> 
          <Route path="/visualizar-brinquedo/:codigo" element={<ViewToy />} />
          <Route path="/visualizar-brinquedo-categoria/:codigo" element={<ViewToyCategory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
