import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-6">Bienvenido a Mi Aplicación</h1>
      <p className="text-lg text-white mb-8">Accede para disfrutar de todas las funcionalidades</p>

      <div className="flex space-x-4">
        <a href="/auth/login" className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition">
          Iniciar Sesión
        </a>
        <a href="/auth/register" className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-green-700 transition">
          Registrarse
        </a>
      </div>
    </div>
  );
}
