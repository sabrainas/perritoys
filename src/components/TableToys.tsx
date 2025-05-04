export function TableToys() {
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
            {Array.from({ length: 4 }).map((_, i) => (
              <tr key={i} className="border-t even:bg-gray-50">
                <td className="py-2 px-4">Descrição do Brinquedo</td>
                <td className="py-2 px-4">Categoria {i + 1}</td>
                <td className="py-2 px-4">R$ 0.00</td>
                <td className="py-2 px-4">
                  <div className="flex items-center gap-4">
                    <button className="text-blue-600 font-semibold hover:underline transition">Editar</button>
                    <button className="text-[#c84755] font-medium px-2 py-1 rounded hover:text-red-600">
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <div className="mt-6 flex justify-end">
          <button className="bg-[#c84755] text-white px-6 py-2 rounded-lg hover:bg-[#a0333f] transition">
            CADASTRAR NOVO BRINQUEDO
          </button>
        </div>
      </div>
    );
  }
  