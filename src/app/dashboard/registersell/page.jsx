"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function NuevoMovimientoPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    concepto: "",
    monto: "",
    fecha: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const res = await fetch("/api/registersell", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData), // No enviamos usuarioId
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      setError("Error al registrar el ingreso.");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex h-screen bg-neutral-950 text-white">
      <div className="w-64 bg-neutral-900 p-4"></div>

      <div className="flex-1 p-6 flex justify-center items-center">
        <div className="p-6 bg-neutral-800 w-1/2 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Nuevo Movimiento de Dinero
          </h2>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="monto"
              value={formData.monto}
              onChange={handleChange}
              className="w-full p-3 rounded bg-neutral-700 text-white placeholder-gray-400 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Monto"
              type="number"
              required
            />

            <input
              name="concepto"
              value={formData.concepto}
              onChange={handleChange}
              className="w-full p-3 rounded bg-neutral-700 text-white placeholder-gray-400 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Concepto"
              type="text"
              required
            />

            <input
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              className="w-full p-3 rounded bg-neutral-700 text-white placeholder-gray-400 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg text-white font-semibold"
              disabled={isLoading}
            >
              {isLoading ? "Guardando..." : "Ingresar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
