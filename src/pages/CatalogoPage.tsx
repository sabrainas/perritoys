import { useParams } from "react-router-dom";
import { Brinquedo } from "../types/brinquedos";
import { CategoryCard } from "../components/CategoryCard";

// Simulação de dados
const categorias = [
  {
    nome: "Carrinhos",
    descricao: "Diversos modelos de carrinhos",
    imagem: "/img/carrinhos.jpg",
  },
  {
    nome: "Bonecas",
    descricao: "As bonecas mais lindas",
    imagem: "/img/bonecas.jpg",
  },
];

const brinquedosMock: Brinquedo[] = [
  { codigo: 1, descricao: "Carrinho vermelho", img: "/img/car1.jpg", detalhes: "Carrinho esportivo", categoria: "carrinhos", marca: "HotWheels", valor: 99.9 },
  { codigo: 2, descricao: "Boneca loira", img: "/img/doll1.jpg", detalhes: "Boneca com vestido rosa", categoria: "bonecas", marca: "Barbie", valor: 129.9 },
];

export function CatalogoPage() {
  const { nome } = useParams();

  if (nome) {
    const brinquedosFiltrados = brinquedosMock.filter(
      (b) => b.categoria.toLowerCase() === nome.toLowerCase()
    );

    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold text-[#c84755] mb-6 capitalize">
          Categoria: {nome}
        </h1>
        {brinquedosFiltrados.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {brinquedosFiltrados.map((b) => (
              <CategoryCard
                key={b.codigo}
                descricao={b.descricao}
                imagem={b.img}
                nome={b.detalhes}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Nenhum brinquedo encontrado nesta categoria.</p>
        )}
      </div>
    );
  }

  // Página com as categorias
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#c84755] mb-6">Categorias</h1>
      <div className="flex flex-wrap gap-4">
        {categorias.map((cat) => (
          <CategoryCard
            key={cat.nome}
            nome={cat.nome}
            descricao={cat.descricao}
            imagem={cat.imagem}
          />
        ))}
      </div>
    </div>
  );
}
