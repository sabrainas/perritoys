import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { BrinquedoDaCategoria } from "../services/brinquedoApi";

export default function ViewToyCategory() {
  const location = useLocation();
  const navigate = useNavigate();
  const brinquedo: BrinquedoDaCategoria = location.state?.brinquedo;

  if (!brinquedo) {
    return (
      <div className="text-center mt-20">
        <p className="text-lg text-red-600 font-semibold">Nenhum brinquedo selecionado.</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-600 underline">
          Voltar
        </button>
      </div>
    );
  }

  return (
    <>
      <Header title={brinquedo.descricao} />
      
      <section className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1 max-w-sm">
          <img
            src={`data:${brinquedo.imgType};base64,${brinquedo.imgBase64}`} 
            alt="imagem do brinquedo"
            className="w-full h-60 rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-semibold text-gray-800">Produto: {brinquedo.descricao}</h1>
          <h1 className="text-xl font-semibold text-gray-800">Marca: {brinquedo.marca}</h1>
          <p className="text-lg font-bold text-[#c84755]">R$ {brinquedo.valor}</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Descrição</h3>
        <p className="text-gray-600">{brinquedo.detalhes}</p>
      </section>
    </>
  );
}
