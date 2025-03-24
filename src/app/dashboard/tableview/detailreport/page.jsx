"use client";
import { Bar } from "react-chartjs-2";

export default function ReportesPage() {
  const data = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May"],
    datasets: [
      {
        label: "Movimientos",
        data: [500, 700, -200, 600, 400],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-200 p-4"> {/* Sidebar */} </div>
      <div className="flex-1 p-6">
        <h1 className="text-xl font-bold">Sistema de gestión de Ingresos y Gastos</h1>
        <div className="flex justify-between items-center mt-6">
          <div className="w-2/3">
            <h2 className="font-bold">Movimientos</h2>
            <Bar data={data} />
          </div>
          <div className="text-right">
            <h2 className="font-bold">Saldo</h2>
            <p className="text-xl font-bold">$150.000</p>
            <button className="bg-gray-500 text-white p-2 mt-4">Descargar CSV</button>
          </div>
        </div>
      </div>
    </div>
  );
}
