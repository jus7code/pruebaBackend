import { prisma } from "@/lib/db";  // Asegúrate de que la ruta sea correcta
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const ingresos = await prisma.Ingreso.findMany();
    return NextResponse.json(ingresos, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener los ingresos" }, { status: 500 });
  }
}
