import { UsCard } from "../components/UsCard";

export function SobrePage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <UsCard nome="Eduardo Antonio" ra="123456789" />
      <UsCard nome="Gustavo Pires" ra="987654321" imagem="/foto.jpg" />
      <UsCard nome="Johann Benjamin" ra="987654321" imagem="/foto.jpg" />
      <UsCard nome="Sabrina Mendonça" ra="987654321" imagem="/foto.jpg" />
      <UsCard nome="Vinicius Silva" ra="987654321" imagem="/foto.jpg" />
      <UsCard nome="Prof. Jadir" ra="987654321" imagem="/foto.jpg" />
    </div>
  );
}
