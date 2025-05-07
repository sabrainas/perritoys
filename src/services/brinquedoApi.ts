import api from "./api";

export interface Brinquedo {
    codigo: number,
    descricao: string,
    categoria: string,
    marca: string,
    img: string,
    imgType: string,
    valor: number,
    detalhes: string
}

export const getAllBrinquedos = async () => {
    const response = await api.get("/brinquedos");
    return response.data;
};

export const getBrinquedoByCodigo = async (codigo: number) => {
    const response = await api.get(`/brinquedos/${codigo}`);
    return response.data;
};

export const createBrinquedo = async (brinquedo: Brinquedo) => {
    const response = await api.post("/brinquedos", brinquedo);
    return response.data;
};

export const deleteBrinquedo = async (codigo: string) => {
    await api.delete(`/brinquedos/${codigo}`)
}

export const getCategorias = async (): Promise<string[]> => {
    const response = await api.get("/brinquedos/categorias");
    return response.data;
  };

  export const getBrinquedosPorCategoria = async (categoria: string): Promise<Brinquedo[]> => {
    const response = await api.get(`/brinquedos/categorias/${encodeURIComponent(categoria)}`);
    return response.data;
  };