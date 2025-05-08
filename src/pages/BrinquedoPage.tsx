import { useParams } from "react-router-dom";
import { brinquedosPorCategoria } from "../data/brinquedos";
import { Brinquedo } from "../types/brinquedos";

export default function BrinquedoPage() {
  const { id } = useParams();
  const brinquedoId = Number(id);

  let brinquedoSelecionado: Brinquedo | undefined;

  for (const lista of Object.values(brinquedosPorCategoria)) {
    const encontrado = lista.find((b) => b.codigo === brinquedoId);
    if (encontrado) {
      brinquedoSelecionado = encontrado;
      break;
    }
  }

  if (!brinquedoSelecionado) {
    return <div className="text-center mt-10 text-red-500">Brinquedo não encontrado</div>;
  }

  return (
    <header className="p-10">
      <h1 className="text-center text-3xl text-[#c84755] font-bold">
        {brinquedoSelecionado.detalhes}
      </h1>
    </header>
  );
}
