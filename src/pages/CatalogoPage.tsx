import { useParams } from "react-router-dom";
import { brinquedosPorCategoria } from "../data/brinquedos";
import { CatalogSection } from "../components/CatalogSection";

export function CatalogoPage() {
  const { nome } = useParams(); // opcional
  const categoria = nome?.toLowerCase();

  if (!nome) {
    // Mostrar todas as categorias se nenhuma for especificada
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold text-[#c84755] mb-6 text-center">
          Catálogo de Brinquedos
        </h1>

        {Object.entries(brinquedosPorCategoria).map(([nomeCategoria, brinquedos]) => (
          <CatalogSection
            key={nomeCategoria}
            titulo={nomeCategoria.replace(/-/g, " ").toUpperCase()}
            brinquedos={brinquedos}
          />
        ))}
      </div>
    );
  }

  const brinquedos = brinquedosPorCategoria[categoria ?? ""] ?? [];

  if (brinquedos.length === 0) {
    return (
      <div className="text-center text-red-500 mt-10">
        Nenhum brinquedo encontrado para esta categoria.
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-[#c84755] mb-6 text-center capitalize">
        {(categoria ?? "").replace(/-/g, " ")}
      </h1>
      <CatalogSection titulo="Brinquedos" brinquedos={brinquedos} />
    </div>
  );
}