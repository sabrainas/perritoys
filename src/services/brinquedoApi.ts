import api from "./api";

export interface Brinquedo {
    codigo: number,
    descricao: string,
    categoria: string,
    marca: string,
    img: string,
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