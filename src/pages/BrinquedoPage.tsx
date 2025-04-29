import { useBrinquedos } from "../hooks/useBrinquedos";
import BrinquedoCard from "../components/BrinquedoCard";
import { BackgroundLayout } from "../layouts/BackgroundLayout";

export default function BrinquedoPage() {
    const { brinquedos, loading } = useBrinquedos();
    console.log("Componente BrinquedoPage carregado");

    if (loading) return <p className="p-4">Carregando brinquedos...</p>;

    return (
    <BackgroundLayout>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-">
        {brinquedos.map((brinquedo) => (
          <BrinquedoCard key={brinquedo.codigo} brinquedo={brinquedo} />
        ))}
      </div>
    </BackgroundLayout>
  );
}