// CatalogoPage.tsx
import {  useNavigate } from "react-router-dom";
import { useCategorias } from "../hooks/useCategorias";

export function CatalogoPage() {
  const { categorias, loading } = useCategorias();
  const navigate = useNavigate();
  //const { nome } = useParams(); // caso você vá usar depois

  if (loading) {
    return <div className="text-center mt-10">Carregando categorias...</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-[#c84755] mb-6 text-center">
        Catálogo de Brinquedos
      </h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {categorias.map((cat) => (
          <button
            key={cat}
            className="cursor-pointer bg-white rounded-xl shadow-md w-72 hover:shadow-lg transition p-4"
            onClick={() => navigate(`/catalogo/${cat}`)}
          >
            <h3 className="text-xl font-bold text-[#c84755] text-center">{cat}</h3>
          </button>
        ))}
      </div>
    </div>
  );
}
