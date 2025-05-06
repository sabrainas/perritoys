import { useState } from "react";
import { createBrinquedo } from "../services/brinquedoApi";
import Header from "../components/Header";

export default function CadastroBrinquedos() {
    const [formData, setFormData] = useState({
        codigo: "",
        categoria: "",
        descricao: "",
        marca: "",
        valor: "",
        img: "",
        detalhes: "",
      });
    
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          const brinquedo = {
            ...formData,
            codigo: parseInt(formData.codigo),
            valor: parseFloat(formData.valor),
          };
    
          await createBrinquedo(brinquedo);
          alert("Brinquedo cadastrado com sucesso!");
    
          setFormData({
            codigo: "",
            categoria: "",
            descricao: "",
            marca: "",
            valor: "",
            img: "",
            detalhes: "",
          });
        } catch (err: any) {
          alert("Erro ao cadastrar brinquedo: " + err.message);
        }
      };
  return (
    <section className="max-w-3xl mx-auto px-6 pb-20">
      <Header title="Cadastrar Brinquedo para Venda"/>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          encType="multipart/form-data"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Código</label>
            <input
              name="codigo"
              value={formData.codigo}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              type="number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Categoria</label>
            <input
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              type="text"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Descrição</label>
            <input
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              type="text"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Marca</label>
            <input
              name="marca"
              value={formData.marca}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              type="text"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Valor (R$)</label>
            <input
              name="valor"
              value={formData.valor}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              type="number"
              step="0.01"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">URL da Imagem</label>
            <input
              name="img"
              value={formData.img}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              type="file"
              accept="image/*"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Detalhes</label>
            <textarea
              name="detalhes"
              value={formData.detalhes}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              rows={4}
              placeholder="Mais informações sobre o brinquedo"
              required
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-center gap-4 mt-6">
            <button
              type="submit"
              className="bg-[#c84755] hover:bg-[#a0333f] text-white px-6 py-2 rounded font-semibold transition"
            >
              CADASTRAR BRINQUEDO
            </button>
            <button
              type="button"
              className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded font-semibold transition"
              onClick={() =>
                setFormData({
                  codigo: "",
                  categoria: "",
                  descricao: "",
                  marca: "",
                  valor: "",
                  img: "",
                  detalhes: "",
                })
              }
            >
              CANCELAR
            </button>
          </div>
        </form>
      </section>
  )
}
