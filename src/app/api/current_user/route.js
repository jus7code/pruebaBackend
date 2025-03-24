import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Importar desde el módulo
import { prisma } from "@/lib/db"; // Importar Prisma

export async function GET(request) {
  // Obtener la sesión del usuario
  const session = await getServerSession(authOptions);

  // Si no hay sesión, responder con error de autenticación
  if (!session) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  // Buscar al usuario en la base de datos usando el identificador (en este caso, el email)
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email, // Asegúrate de que este campo coincida con el identificador en la sesión
    },
  });

  // Si el usuario no se encuentra en la base de datos
  if (!user) {
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
  }

  // Verificar si el usuario tiene el atributo isAdmin como true
  if (user.isAdmin === false) {
    return NextResponse.json({ error: "Acceso denegado, no es administrador" }, { status: 403 });
  } else {
    return NextResponse.json({ message: "Usuario es administrador" }, { status: 202 });
  }
}