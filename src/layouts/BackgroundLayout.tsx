import background from '../assets/bg-perritoys.jpeg';
import { Navbar } from '../components/Navbar';

interface BackgroundLayoutProps {
  children: React.ReactNode;
}

export function BackgroundLayout({ children }: BackgroundLayoutProps) {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
      <div className="pt-16 flex-1">
        {children}
      </div>
    </div>
  );
}
