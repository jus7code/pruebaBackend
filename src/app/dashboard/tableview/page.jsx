"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function IngresosPage() {
  const [ingresos, setIngresos] = useState([]);

  useEffect(() => {
    const fetchIngresos = async () => {
      try {
        const res = await fetch("/api/tableView"); // Llamada a la API
        if (!res.ok) throw new Error("Error al obtener los datos");
        const data = await res.json();
        setIngresos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIngresos();
  }, []);

  return (
    <div className="flex h-screen bg-neutral-950 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-neutral-900 p-4"></div>

      {/* Contenido */}
      <div className="flex-1 p-6 flex flex-col items-center">
        <div className="bg-neutral-800 w-3/4 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">
            Sistema de Gestión de Ingresos y Gastos
          </h1>

          <div className="flex justify-end mb-4">
            <Link href="/dashboard/registersell">
              <button className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg text-white font-semibold">
                Nuevo
              </button>
            </Link>
          </div>

          <div className="flex justify-end mb-4">
            <Link href="/dashboard/tableview/detailreport">
              <button className="bg-green-500 hover:bg-green-700 transition px-4 py-2 rounded-lg text-white font-semibold">
                Generar reporte
              </button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-neutral-700">
              <thead className="bg-neutral-700">
                <tr>
                  <th className="border border-neutral-600 p-2 text-left">Concepto</th>
                  <th className="border border-neutral-600 p-2 text-left">Monto</th>
                  <th className="border border-neutral-600 p-2 text-left">Fecha</th>
                  <th className="border border-neutral-600 p-2 text-left">Usuario</th>
                </tr>
              </thead>
              <tbody>
                {ingresos.length > 0 ? (
                  ingresos.map((ingreso) => (
                    <tr key={ingreso.id}>
                      <td className="border border-neutral-600 p-2">{ingreso.concepto}</td>
                      <td className="border border-neutral-600 p-2">${ingreso.monto}</td>
                      <td className="border border-neutral-600 p-2">{new Date(ingreso.fecha).toLocaleDateString()}</td>
                      <td className="border border-neutral-600 p-2">{ingreso.usuarioId}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center p-4">No hay ingresos registrados</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="text-right font-bold text-lg mt-6">
            Total: <span className="text-blue-400">
              ${ingresos.reduce((total, ingreso) => total + parseFloat(ingreso.monto), 0)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
