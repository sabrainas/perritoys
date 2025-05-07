import { useEffect, useState } from "react";
import { getCategorias } from "../services/brinquedoApi";

export function useCategorias() {
  const [categorias, setCategorias] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategorias()
      .then(setCategorias)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { categorias, loading };
}
