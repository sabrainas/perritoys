import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  nome: string;
  descricao: string;
  imagem: string;
}

export function CategoryCard({ nome, descricao, imagem }: CategoryCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden w-72 hover:shadow-lg transition"
      onClick={() => navigate(`/catalogo/${nome.toLowerCase()}`)}
    >
      <img src={imagem} alt={nome} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#c84755] mb-2">{nome}</h3>
        <p className="text-gray-600 text-sm">{descricao}</p>
      </div>
    </div>
  );
}
