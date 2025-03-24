
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ReportesPage() {
const [users, setUsers] = useState([]);
  const router = useRouter(); 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const ros = await fetch("/api/current_user");
        if (ros.status === 403) {
          alert("No tienes permisos para acceder a esta página");
          router.push("/dashboard"); 
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex h-screen bg-neutral-950 text-white">
    
      <div className="flex-1 p-6">
        <h1 className="text-xl font-bold">Sistema de gestión de Ingresos y Gastos</h1>
        <div className="flex justify-between items-center mt-6">
          <div className="w-2/3">
            <h2 className="font-bold">Movimientos</h2>
           
          </div>
          <div className="text-right">
            <h2 className="font-bold">Saldo</h2>
            <p className="text-xl font-bold">$150.000</p>
            <button className="bg-teal-500 text-white p-2 mt-4 rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300">
              Descargar CSV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
