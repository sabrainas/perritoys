import { useEffect, useState } from "react";
import { Brinquedo, getAllBrinquedos } from "../services/brinquedoApi";

export function useBrinquedos() {
    const [brinquedos, setBrinquedos] = useState<Brinquedo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Iniciando a requisição de brinquedos...");
        getAllBrinquedos()
            .then((data) => {
                console.log("Dados recebidos:", data); 
                setBrinquedos(data);
            })
            .catch((err) => console.error("Erro ao buscar brinquedos:", err))
            .finally(() => setLoading(false));
    }, []);

    return { brinquedos, loading };
}