"use client";
import React from "react";
import Link from "next/link";
export default function Dashboard() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        {/* Caja 1 */}
        <div className="bg-neutral-800 p-10 text-center rounded-lg shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold mb-4">Sistema de gestión de ingresos y gastos</h2>
          <Link href="/dashboard/registersell">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white p-2 rounded-lg mt-4">
              Ir a Ingresos y Gastos
            </button>
          </Link>
        </div>

        {/* Caja 2 */}
        <div className="bg-neutral-800 p-10 text-center rounded-lg shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold mb-4">Gestión de usuarios</h2>
          <Link href="/dashboard/usermanagement">
            <button className="bg-green-600 hover:bg-green-700 transition text-white p-2 rounded-lg mt-4">
              Ir a Usuarios
            </button>
          </Link>
        </div>

        {/* Caja 3 */}
        <div className="bg-neutral-800 p-10 text-center rounded-lg shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold mb-4">Reportes</h2>
          <Link href="/dashboard/tableview">
            <button className="bg-yellow-600 hover:bg-yellow-700 transition text-white p-2 rounded-lg mt-4">
              Ir a Reportes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
  
