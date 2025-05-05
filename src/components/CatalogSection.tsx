import { Brinquedo } from "../types/brinquedos";
import { CatalogCard } from "./CatalogCard";

interface CatalogSectionProps {
  titulo: string;
  brinquedos: Brinquedo[];
}

export function CatalogSection({ titulo, brinquedos }: CatalogSectionProps) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-[#c84755]">{titulo}</h2>
      <div className="flex flex-wrap gap-4">
        {brinquedos.map((item) => (
          <CatalogCard
            key={item.codigo}
            descricao={item.descricao}
            imagem={item.img}
            nome={item.descricao}
          />
        ))}
      </div>
    </div>
  );
}
