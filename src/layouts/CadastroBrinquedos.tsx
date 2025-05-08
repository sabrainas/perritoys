import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createBrinquedo, getBrinquedoByCodigo, putBrinquedo, getCategorias } from "../services/brinquedoApi";
import Header from "../components/Header";

export default function CadastroBrinquedos() {
  const navigate = useNavigate();
  const { codigo } = useParams(); // Captura o 'codigo' da URL
  const location = useLocation();

  const brinquedoEditando = location.state?.brinquedo;  
  const [formData, setFormData] = useState({
    codigo: brinquedoEditando?.codigo ?? "",
    categoria: brinquedoEditando?.categoria ?? "",
    descricao: brinquedoEditando?.descricao ?? "",
    marca: brinquedoEditando?.marca ?? "",
    valor: brinquedoEditando?.valor?.toString() ?? "",
    img: brinquedoEditando?.img ? [brinquedoEditando.img] : [],
    imgType: brinquedoEditando?.imgType ?? "",
    detalhes: brinquedoEditando?.detalhes ?? "",
  });

  const [categorias, setCategorias] = useState<string[]>([]); // Novo estado para as categorias

  // Carregar categorias no carregamento do componente
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const categoriasData = await getCategorias(); // Busca as categorias
        setCategorias(categoriasData);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      }
    };
    fetchCategorias();
  }, []);

  useEffect(() => {
    if (codigo) {
      const fetchBrinquedo = async () => {
        try {
          const brinquedo = await getBrinquedoByCodigo(Number(codigo));
          console.log("Brinquedo encontrado:", brinquedo);
          setFormData({
            codigo: brinquedo.codigo.toString(),
            categoria: brinquedo.categoria,
            descricao: brinquedo.descricao,
            marca: brinquedo.marca,
            valor: brinquedo.valor.toString(),
            img: brinquedo.img ? [brinquedo.img] : [],
            imgType: brinquedo.imgType ?? "",
            detalhes: brinquedo.detalhes,
          });
        } catch (error) {
          console.error("Erro ao carregar brinquedo:", error);
        }
      };
      fetchBrinquedo();
    }
  }, [codigo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onloadend = () => {
      const fullBase64 = reader.result as string;
      const base64Only = fullBase64.split("base64,")[1];
  
      setFormData((prev) => ({
        ...prev,
        img: [base64Only],
        imgType: file.type,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const brinquedoPayload = {
      ...formData,
      img: formData.img[0], // Assegure-se de enviar apenas uma imagem (não um array)
      codigo: parseInt(formData.codigo),
      valor: parseFloat(formData.valor),
    };

    try {
      if (codigo) {
        // Edição do brinquedo
        await putBrinquedo(parseInt(codigo), brinquedoPayload);
        alert("Brinquedo atualizado com sucesso!");
      } else {
        // Criação do brinquedo
        await createBrinquedo(brinquedoPayload);
        alert("Brinquedo cadastrado com sucesso!");
      }

      // Limpa o formulário e redireciona
      setFormData({
        codigo: "",
        categoria: "",
        descricao: "",
        marca: "",
        valor: "",
        img: [],
        imgType: "",
        detalhes: "",
      });

      navigate("/"); // Redireciona para a página inicial (ou onde você achar melhor)
    } catch (err: any) {
      alert("Erro ao salvar brinquedo: " + err.message);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 pb-20">
      <Header title={codigo ? "Editar Brinquedo" : "Cadastrar Brinquedo para Venda"} />
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        encType="multipart/form-data"
      >
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Categoria</label>
          <select
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Selecione uma categoria</option>
            {categorias.map((categoria, index) => (
              <option key={index} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
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
          <label className="block text-sm font-medium mb-1">Imagem</label>
          {formData.img.length > 0 && (
            <div className="mb-2">
              <p className="text-sm text-gray-600">Imagem atual:</p>
              <img
                src={`data:${formData.imgType};base64,${formData.img[0]}`}
                alt="Imagem do brinquedo"
                className="w-48 h-auto border rounded shadow"
              />
            </div>
          )}

          <input
            name="img"
            onChange={handleImageChange}
            className="w-full border rounded px-3 py-2"
            type="file"
            accept="image/*"
            required={formData.img.length === 0}
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
            {codigo ? "SALVAR ALTERAÇÕES" : "CADASTRAR BRINQUEDO"}
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
                img: [],
                imgType: "",
                detalhes: "",
              })
            }
          >
            CANCELAR
          </button>
        </div>
      </form>
    </section>
  );
}
