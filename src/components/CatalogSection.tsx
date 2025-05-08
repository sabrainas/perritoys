import { BrinquedoDaCategoria } from "../services/brinquedoApi";
import { CategoryCard } from "./CategoryCard";

interface Props {
  titulo: string;
  brinquedos: BrinquedoDaCategoria[];
}

export function CatalogSection({ titulo, brinquedos }: Props) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-[#c84755]">{titulo}</h2>
      <div className="flex flex-wrap gap-4">
        {brinquedos.map((item) => (
          <CategoryCard
            key={item.codigo}
            brinquedo={{
              ...item,
              imgBase64: item.imgBase64,
              imgType: item.imgType || "image/jpeg",
            }}
          />
        ))}
      </div>
    </div>
  );
}
