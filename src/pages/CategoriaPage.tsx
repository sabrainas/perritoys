import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBrinquedosPorCategoria } from "../services/brinquedoApi"; 
import { CatalogSection } from "../components/CatalogSection";
import { BrinquedoDaCategoria } from "../types/categoria";

export function CategoriaPage() {
  const { nome } = useParams();
  const [brinquedos, setBrinquedos] = useState<BrinquedoDaCategoria[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (nome) {
      getBrinquedosPorCategoria(nome)
        .then((data) => {
          // Aqui você pode mapear os brinquedos e garantir que eles se ajustem à estrutura de BrinquedoDaCategoria
          const brinquedosDaCategoria: BrinquedoDaCategoria[] = data.map(brinquedo => ({
            ...brinquedo,
            img: brinquedo.imgBase64 ? `data:${brinquedo.imgType};base64,${brinquedo.imgBase64}` : '',  // Convertendo imgBase64 para o formato de URL
            imgType: brinquedo.imgType || 'image/jpeg',  // Valor padrão para o tipo da imagem
          }));
          setBrinquedos(brinquedosDaCategoria);  // Atualiza o estado com os brinquedos convertidos
        })
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
