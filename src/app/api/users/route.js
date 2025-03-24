import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Obtener usuarios de la base de datos
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        telefono: true,
      },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error al obtener usuarios", error: error.message },
      { status: 500 }
    );
  }
}
