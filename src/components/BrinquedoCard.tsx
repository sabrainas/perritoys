import { useNavigate } from "react-router-dom";
import { Brinquedo } from "../services/brinquedoApi";

interface Props {
  brinquedo: Brinquedo;
}
export default function BrinquedoCard({ brinquedo }: Readonly<Props>) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/brinquedo/${brinquedo.codigo}`, { state: { brinquedo } });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm cursor-pointer hover:shadow-lg transition"
    >
      <img 
        src={`data:${brinquedo.imgType};base64,${brinquedo.img}`}
        alt="imagem brinquedo" 
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold pb-2">{brinquedo.descricao}</h2>
      <p className="font-bold text-[#c84755]"> R$ {brinquedo.valor}</p>
    </div>
  );
}