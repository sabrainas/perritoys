import { Brinquedo } from "../services/brinquedoApi";

interface Props {
    brinquedo: Brinquedo;
}

export default function BrinquedoCard({ brinquedo }: Readonly<Props>) {
    console.log("Renderizando brinquedo:", brinquedo);
    return (
      <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm">
        <img 
            src={brinquedo.img} 
            alt="imagem brinquedo" 
            className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-bold">{brinquedo.descricao}</h2>
        <p className="text-gray-600">Tipo: {brinquedo.categoria}</p>
        <p className="text-gray-600">Descrição: {brinquedo.detalhes}</p>
      </div>
    );
  }