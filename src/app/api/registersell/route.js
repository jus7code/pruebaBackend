import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Importar desde el módulo
import { prisma } from "@/lib/db";

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const { concepto, monto, fecha } = await request.json();

  const nuevoMovimiento = await prisma.Ingreso.create({
    data: {
      usuarioId: session.user.name, // Se guarda el nombre del usuario autenticado
      concepto,
      monto,
      fecha,
    },
  });

  return NextResponse.json(nuevoMovimiento, { status: 201 });
}
