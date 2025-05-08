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

export interface BrinquedoDaCategoria {
    marca: string;
    codigo: number;
    imgBase64: string;
    imgType: string;
    categoria: string;
    valor: number;
    detalhes: string;
    descricao: string;
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

export const getBrinquedosPorCategoria = async (categoria: string): Promise<BrinquedoDaCategoria[]> => {
    const response = await api.get(`/brinquedos/categorias/${encodeURIComponent(categoria)}`);
    return response.data;
};

export const putBrinquedo = async (codigo: number, brinquedo: Brinquedo) => {
    const response = await api.put(`/brinquedos/${codigo}`, brinquedo);
    return response.data;
};  
  