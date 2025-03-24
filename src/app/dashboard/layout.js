import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-neutral-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-900 p-4 shadow-lg">
        <div className="bg-neutral-800 p-4 text-center font-bold text-lg rounded-lg mb-6">
          LOGO
        </div>
        <nav className="space-y-4"> {/* Añade espacio entre los elementos */}
          <Link href="/dashboard">
            <div className="bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg text-center cursor-pointer mb-4">
              Inicio
            </div>
          </Link>
          <Link href="/dashboard/registersell">
            <div className="bg-green-600 hover:bg-green-700 transition p-3 rounded-lg text-center cursor-pointer mb-4">
              Ingresos y Egresos
            </div>
          </Link>
          <Link href="/dashboard/usermanagement">
            <div className="bg-purple-600 hover:bg-purple-700 transition p-3 rounded-lg text-center cursor-pointer mb-4">
              Usuarios
            </div>
          </Link>
          <Link href="/dashboard/tableview">
            <div className="bg-yellow-600 hover:bg-yellow-700 transition p-3 rounded-lg text-center cursor-pointer mb-4">
              Reportes
            </div>
          </Link>
          <Link href="/api/auth/signout">
            <div className="bg-red-600 hover:bg-red-700 transition p-3 rounded-lg text-center cursor-pointer">
              Cerrar sesión
            </div>
          </Link>
        </nav>
      </aside>

      {/* Contenido */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
