import { Link } from 'react-router-dom';
import logo from '../assets/logo1-perritoys.png'; 

export function Navbar() {
  return (
    <nav className="bg-opacity-80 backdrop-blur-md fixed top-0 w-full z-50 border-b-2 border-[#c84755]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-gray-800">
            <img src={logo} alt="" className="h-12 cursor-pointer" />
          </div>
          <div className="flex space-x-6">
          <Link to="/">Home</Link>
          <Link to="/brinquedos">Catálogo de Brinquedos</Link>
          <Link to="/administraca">Administração</Link>
          <Link to="/equipe">Sobre a equipe</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
