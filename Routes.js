import React from "react";
import { Route, Routes } from 'react-router-dom'; // Cambiamos Await por Routes
import App from "./App";
import OtraPagina from "./OtraPagina";
import ListaDePost from "./ListaDePost";


const RoutesComponent = () => {
  return (
    <Routes> {/* Utilizamos Routes en lugar de Await */}
      <Route path="/" element={<App />} />
      <Route path="/otra-pagina" element={<OtraPagina />} />
    </Routes>
  );
};

export default RoutesComponent;

