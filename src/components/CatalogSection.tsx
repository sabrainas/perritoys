import { Brinquedo } from "../types/brinquedos";
import { CategoryCard } from "./CategoryCard";

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
          <CategoryCard
            key={item.codigo}
            nome={item.detalhes}
            descricao={item.descricao}
            imagem={item.img}
            codigo={item.codigo} // <- novo campo
          />
        ))}
      </div>
    </div>
  );
}
