import { useNavigate } from "react-router-dom";

interface Props {
  nome: string;
  descricao: string;
  imagem: string;
  imgType: string; // <- novo
  codigo: number;
}

export function CategoryCard({ nome, descricao, imagem, imgType, codigo }: Props) {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer bg-white rounded-xl shadow-md w-72 hover:shadow-lg transition"
      onClick={() => navigate(`/brinquedo/${codigo}`)}
    >
      <img
        src={`data:${imgType};base64,${imagem}`}
        alt={nome}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#c84755] mb-2">{nome}</h3>
        <p className="text-gray-600 text-sm">{descricao}</p>
      </div>
    </div>
  );
}
