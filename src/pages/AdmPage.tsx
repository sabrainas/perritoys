import { useState } from "react";
import Login from "../layouts/Login";
import TableToys from "../components/TableToys";

export function AdmPage() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      {!isLogged ? (
        <Login onLoginSuccess={() => setIsLogged(true)} />
      ) : (
        <TableToys />
      )}
    </>
  );
}
