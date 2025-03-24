import React from "react";
export default function IngresosPage() {
    return (
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-200 p-4">
          <div className="bg-white p-4 text-center mb-6">LOGO</div>
          <div className="bg-gray-600 text-white p-3 mb-2 text-center">Inicio</div>
          <div className="bg-gray-600 text-white p-3 mb-2 text-center">Ingresos y egresos</div>
          <div className="bg-gray-600 text-white p-3 mb-2 text-center">Usuarios</div>
          <div className="bg-gray-600 text-white p-3 text-center">Reportes</div>
        </div>
        {/* Contenido */}
        <div className="flex-1 p-6">
          <h1 className="text-xl font-bold">Sistema de gestión de Ingresos y Gastos</h1>
          <button className="bg-gray-500 text-white p-2 float-right">Nuevo</button>
          <table className="w-full mt-4 border">
            <thead className="bg-gray-400">
              <tr>
                <th className="border p-2">Concepto</th>
                <th className="border p-2">Monto</th>
                <th className="border p-2">Fecha</th>
                <th className="border p-2">Usuario</th>
              </tr>
            </thead>
            <tbody>
              {/* Aquí irían las filas dinámicas */}
            </tbody>
          </table>
          <div className="text-right font-bold mt-4">Total: $$$$$$$$$$$$</div>
        </div>
      </div>
    );
  }
  