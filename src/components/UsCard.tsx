interface UsCardProps {
  nome: string;
  ra: string;
  imagem?: string; 
}

export function UsCard({ nome, ra, imagem }: UsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm">
      <img
        src={imagem ?? "/placeholder.jpg"} 
        alt="imagem sobre nós"
        className="w-full h-60 object-cover rounded-md mb-4 border"
      />
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-xl font-bold pb-2">{nome}</h2>
        <p className="font-bold text-[#c84755]">{ra}</p>
      </div>
    </div>
  );
}
