import duduImg from '../assets/dudu.jpeg';
import gustaImg from '../assets/gusta.jpeg';
import bolivarImg from '../assets/bolivar.jpeg';
import euLindaImg from '../assets/eu-linda.jpeg';
import cruzImg from '../assets/cruz.jpeg';
import { UsCard } from '../components/UsCard';

export function SobrePage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <UsCard nome="Eduardo Antonio" ra="123456789" imagem={duduImg} />
      <UsCard nome="Gustavo Pires" ra="1670482312033" imagem={gustaImg} />
      <UsCard nome="Johann Benjamin" ra="987654321" imagem={bolivarImg} />
      <UsCard nome="Sabrina Mendonça" ra="1670482312046" imagem={euLindaImg} />
      <UsCard nome="Vinicius Silva" ra="987654321" imagem={cruzImg} />
    </div>
  );
}
