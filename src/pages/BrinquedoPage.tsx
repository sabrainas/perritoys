import { useBrinquedos } from "../hooks/useBrinquedos";
import BrinquedoCard from "../components/BrinquedoCard";

export default function BrinquedoPage() {
    const { brinquedos, loading } = useBrinquedos();
    console.log("Componente BrinquedoPage carregado");

    return (
    <>
      {loading && (
        <p className="p-4">Carregando brinquedos...</p>
      )}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-">
        {brinquedos.map((brinquedo) => (
          <BrinquedoCard key={brinquedo.codigo} brinquedo={brinquedo} />
        ))}
      </div> */}
      <header className="p-10">
        <h1 className="text-center text-2xl text-[#c84755] font-medium">Brinquedos em Destaque</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 p-4 bg-">
        <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm">
          <img 
              src="" 
              alt="imagem brinquedo" 
              className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold pb-3">Urso de pelúcia</h2>
          <p className="font-bold text-[#c84755]">R$ 19.99</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm">
          <img 
              src="" 
              alt="imagem brinquedo" 
              className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold">Urso de pelúcia</h2>
          <p className="text-gray-600">Tipo: Criança</p>
          <p className="text-gray-600">Descrição: Urso de pelucia roxo</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm">
          <img 
              src="" 
              alt="imagem brinquedo" 
              className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold">Urso de pelúcia</h2>
          <p className="text-gray-600">Tipo: Criança</p>
          <p className="text-gray-600">Descrição: Urso de pelucia roxo</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm">
          <img 
              src="" 
              alt="imagem brinquedo" 
              className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold">Urso de pelúcia</h2>
          <p className="text-gray-600">Tipo: Criança</p>
          <p className="text-gray-600">Descrição: Urso de pelucia roxo</p>
        </div>
      </div>
    </>
  );
}