"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Importamos el enrutador

export default function UsuariosPage() {
  const [users, setUsers] = useState([]);
  const router = useRouter(); // Hook de navegación

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users"); 
        const ros = await fetch("/api/current_user");
        if (ros.status === 403) {
          alert("No tienes permisos para acceder a esta página");
          router.push("/dashboard"); 
        }
        if (!res.ok) throw new Error("Error al obtener usuarios");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchUsers();
  }, []);
  

  return (
    <div className="flex flex-col h-screen bg-neutral-950 p-6">
      <div className="flex justify-between items-center bg-gray-800 p-4 shadow-md rounded-xl">
        <h1 className="text-2xl font-bold text-white">
          Sistema de Gestión de Ingresos y Gastos
        </h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
          ➕ Agregar Usuario
        </button>
      </div>

      <div className="mt-6 bg-gray-900 p-6 shadow-md rounded-xl">
        <h2 className="text-xl font-semibold text-gray-300 mb-4">Usuarios</h2>

        <table className="w-full border-collapse border border-gray-700">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="border border-gray-700 p-3 text-left">Nombre</th>
              <th className="border border-gray-700 p-3 text-left">Correo</th>
              <th className="border border-gray-700 p-3 text-left">Teléfono</th>
              <th className="border border-gray-700 p-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-800 transition">
                  <td className="border border-gray-700 p-3 text-gray-300">{user.name}</td>
                  <td className="border border-gray-700 p-3 text-gray-300">{user.email}</td>
                  <td className="border border-gray-700 p-3 text-gray-300">{user.telefono}</td>
                  <td className="border border-gray-700 p-3">
                    <button 
                      className="bg-yellow-500 text-black px-3 py-1 rounded-md shadow-md hover:bg-yellow-600 transition"
                      onClick={() => {
                      
                        router.push(`/dashboard/usermanagement/useredit/${user.id}`);
                      }}
                    >
                      ✏️ Editar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border border-gray-700 p-3 text-gray-300" colSpan="4">
                  No hay usuarios registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
