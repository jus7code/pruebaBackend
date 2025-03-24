import React from "react";
export default function UsuariosPage() {
    return (
      <div className="flex h-screen">
        <div className="w-64 bg-gray-200 p-4"> {/* Sidebar */} </div>
        <div className="flex-1 p-6">
          <h1 className="text-xl font-bold">Sistema de gestión de Ingresos y Gastos</h1>
          <h2 className="font-bold mt-4">Usuarios</h2>
          <table className="w-full mt-4 border">
            <thead className="bg-gray-400">
              <tr>
                <th className="border p-2">Nombre</th>
                <th className="border p-2">Correo</th>
                <th className="border p-2">Teléfono</th>
                <th className="border p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">John Doe</td>
                <td className="border p-2">test@test.com</td>
                <td className="border p-2">3245432</td>
                <td className="border p-2 text-blue-500 cursor-pointer">Editar usuario</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  