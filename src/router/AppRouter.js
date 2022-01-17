import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClientesScreen } from "../components/clientes/ClientesScreen";
import { CuentasCobrarScreen } from "../components/cuentascobrar/CuentasCobrarScreen";
import { MiniDrawer } from "../components/ui/MiniDrawer";

import "./AppRouter.css";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="general-container">
        
        <div className="item1">
          <MiniDrawer />
        </div>
        
        <div className="item2">
          <Routes>
            <Route path="/clientes" element={<ClientesScreen />} />
            <Route path="/cuentascobrar" element={<CuentasCobrarScreen />} />

            <Route path="/" element={<ClientesScreen />} />
          </Routes>
        </div>
        
      </div>
    </BrowserRouter>
  );
};
