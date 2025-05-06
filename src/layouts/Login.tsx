import Header from "../components/Header";
import { useState } from "react";

interface LoginProps {
  onLoginSuccess: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (username === "admin" && senha === "1234") {
      onLoginSuccess(); 
    } else {
      alert("Login inválido.");
    }
  }

  return (
    <>
      <Header title="Conectar na Conta da Perritoys" />
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Nome do Usuário</label>
            <input
              name="usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border rounded px-3 py-2"
              type="text"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Senha do Usuário</label>
            <input
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full border rounded px-3 py-2"
              type="password"
              required
            />
          </div>

          <div className="md:col-span-2 flex justify-center gap-4 mt-6">
            <button
              type="submit"
              className="bg-[#c84755] hover:bg-[#a0333f] text-white px-6 py-2 rounded font-semibold transition"
            >
              CONECTAR AO CATÁLOGO
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
