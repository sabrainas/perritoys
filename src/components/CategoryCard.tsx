import { useNavigate } from "react-router-dom";
import { BrinquedoDaCategoria } from "../services/brinquedoApi";

interface Props {
  brinquedo: BrinquedoDaCategoria;
}

export function CategoryCard({ brinquedo }: Props) {
  const navigate = useNavigate();

  return (
    <button
      className="cursor-pointer bg-white rounded-xl shadow-md w-72 hover:shadow-lg transition"
      onClick={() => navigate(`/visualizar-brinquedo-categoria/${brinquedo.codigo}`, { state: { brinquedo } })}
    >
      <img
        src={`data:${brinquedo.imgType};base64,${brinquedo.imgBase64}`}
        alt={brinquedo.descricao}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#c84755] mb-2">{brinquedo.descricao}</h3>
        <p className="text-gray-600 text-sm">{brinquedo.detalhes}</p>
      </div>
    </button>
  );
}
