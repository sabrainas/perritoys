import { Outlet } from 'react-router-dom';
import background from '../assets/bg-perritoys.jpeg';
import { Navbar } from '../components/Navbar';

export function BackgroundLayout() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
      <div className="pt-16 flex-1">
        <Outlet/>
      </div>
    </div>
  );
}
