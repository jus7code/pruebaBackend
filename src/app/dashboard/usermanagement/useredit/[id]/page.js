"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UserEditPage({ params }) {
  const { id } = params; // Obtiene el ID del usuario desde la URL
  const router = useRouter();
  
  const [user, setUser] = useState({ name: "", email: "", telefono: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false); // Estado para indicar si se está guardando

  useEffect(() => {
    if (!id) return;
    
    async function fetchUser() {
      try {
        const res = await fetch(`/api/users/${id}`);
        const data = await res.json();

        if (res.ok) {
          setUser(data);
        } else {
          console.error("Error al cargar usuario:", data.message);
        }
      } catch (error) {
        console.error("Error de conexión:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [id]);

  // 🔹 Función para manejar la actualización del usuario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(false);

    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        alert("Usuario actualizado correctamente!");
        router.push("/dashboard/usermanagement"); // Redirige a la lista de usuarios
      } else {
        console.error("Error al actualizar usuario");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-white">Cargando...</p>;

  return (
    <div className="bg-neutral-950 text-white min-h-screen flex justify-center items-center">
      <div className="bg-neutral-800 p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-xl font-bold mb-4">Editar Usuario</h1>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Nombre:
            <input 
              type="text" 
              value={user.name} 
              onChange={(e) => setUser({ ...user, name: e.target.value })} 
              className="w-full p-2 bg-neutral-700 rounded mt-1"
            />
          </label>

          <label className="block mb-2">
            Correo:
            <input 
              type="email" 
              value={user.email} 
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full p-2 bg-neutral-700 rounded mt-1"
            />
          </label>

          <label className="block mb-4">
            Teléfono:
            <input 
              type="text" 
              value={user.telefono || ""} 
              onChange={(e) => setUser({ ...user, telefono: e.target.value })} 
              className="w-full p-2 bg-neutral-700 rounded mt-1"
            />
          </label>

          <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={saving}
          >
            {saving ? "Guardando..." : "Guardar Cambios"}
          </button>
        </form>
      </div>
    </div>
  );
}
