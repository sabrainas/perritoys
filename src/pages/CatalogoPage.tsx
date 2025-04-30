export function CatalogoPage() {
    return (
      <>
        <header className="p-10">
          <h1 className="text-center text-3xl text-[#c84755] font-bold">
            Nome do Brinquedo Selecionado
          </h1>
        </header>
  
        <section className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1 max-w-sm">
            <img
              src="/assets/seu-brinquedo.jpeg"
              alt="imagem do brinquedo"
              className="w-full h-60 rounded-lg shadow-md object-cover"
            />
          </div>
  
          <div className="flex-1 space-y-4">
            <h2 className="text-gray-600 text-sm">Código de ID do brinquedo</h2>
            <h1 className="text-2xl font-semibold text-gray-800">NOME DO BRINQUEDO</h1>
            <p className="text-lg font-bold text-[#c84755]">R$ 0.00</p>
            <button className="bg-[#c84755] text-white px-4 py-2 rounded hover:bg-[#a73344] transition">
              Adicionar ao carrinho
            </button>
          </div>
        </section>
  
        <section className="max-w-5xl mx-auto px-4 py-10">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Descrição</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt congue...
          </p>
        </section>
      </>
    );
  }
  