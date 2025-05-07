// CategoriaPage.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBrinquedosPorCategoria } from "../services/brinquedoApi";
import { Brinquedo } from "../types/brinquedos";
import { CatalogSection } from "../components/CatalogSection";

export function CategoriaPage() {
  const { nome } = useParams();
  const [brinquedos, setBrinquedos] = useState<Brinquedo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (nome) {
      getBrinquedosPorCategoria(nome)
        .then(setBrinquedos)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [nome]);

  if (loading) {
    return <div className="text-center mt-10">Carregando brinquedos...</div>;
  }

  if (!brinquedos.length) {
    return (
      <div className="text-center text-red-500 mt-10">
        Nenhum brinquedo encontrado para {nome}.
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-[#c84755] mb-6 text-center">
        {nome}
      </h1>
      <CatalogSection titulo={`Brinquedos de ${nome}`} brinquedos={brinquedos} />
    </div>
  );
}
