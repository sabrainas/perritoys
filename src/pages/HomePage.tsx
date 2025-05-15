import { useBrinquedos } from "../hooks/useBrinquedos";
import BrinquedoCard from "../components/BrinquedoCard";
import Header from "../components/Header";

export default function BrinquedoPage() {
    const { brinquedos, loading } = useBrinquedos();
    console.log("Componente BrinquedoPage carregado");

    return (
    <>
      {loading ? (
        <p className="p-4">Carregando brinquedos...</p>
      ) : (
        <>
          <Header title="Brinquedos em Destaque" />     
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 p-4 ">
            {brinquedos.map((brinquedo) => (
              <BrinquedoCard key={brinquedo.codigo} brinquedo={brinquedo} />
            ))}
          </div> 
        </>
      )} 
    </>
  );
}