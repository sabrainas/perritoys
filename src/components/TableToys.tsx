import { useNavigate } from "react-router-dom";
import { useBrinquedos } from "../hooks/useBrinquedos";
import { deleteBrinquedo } from "../services/brinquedoApi";

export default function TableToys() {
  const navigate = useNavigate();
  const { brinquedos, loading } = useBrinquedos();

  const handleDelete = async (codigo: number) => {
    if (confirm("Tem certeza que deseja excluir este brinquedo?")) {
      try {
        await deleteBrinquedo(String(codigo));
        window.location.reload(); 
      } catch (error) {
        alert("Erro ao excluir o brinquedo.");
        console.error(error);
      }
    }
  };

  if (loading) {
    return <div className="p-6">Carregando brinquedos...</div>;
  }

  return (
    <div className="p-6">
      <table className="w-full border shadow-2xl rounded-lg overflow-hidden">
        <thead className="bg-[#c84755] text-white">
          <tr>
            <th className="py-3 px-4 text-left">NOME DO PRODUTO</th>
            <th className="py-3 px-4 text-left">CATEGORIA</th>
            <th className="py-3 px-4 text-left">VALOR</th>
            <th className="py-3 px-4 text-left">CONTROLES DO PRODUTO</th>
          </tr>
        </thead>
        <tbody>
          {brinquedos.map((brinquedo) => (
            <tr key={brinquedo.codigo} className="border-t even:bg-gray-50">
              <td className="py-2 px-4">{brinquedo.codigo}</td>
              <td className="py-2 px-4">{brinquedo.descricao}</td>
              <td className="py-2 px-4">{brinquedo.categoria}</td>
              <td className="py-2 px-4">R$ {brinquedo.valor.toFixed(2)}</td>
              <td className="py-2 px-4">
                <div className="flex items-center gap-4">
                  <button className="text-blue-600 font-semibold hover:underline transition">
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(brinquedo.codigo)}
                    className="text-[#c84755] font-medium px-2 py-1 rounded hover:text-red-600"
                  >
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex justify-end">
        <button
          onClick={() => navigate("/cadastro")}
          className="bg-[#c84755] text-white px-6 py-2 rounded-lg hover:bg-[#a0333f] transition"
        >
          CADASTRAR NOVO BRINQUEDO
        </button>
      </div>
    </div>
  );
}
