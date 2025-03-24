import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params; 


    const user = await prisma.user.findUnique({
      where: { id }, 
      select: {
        id: true,
        name: true,
        email: true,
        telefono: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    return NextResponse.json(
      { message: "Error al obtener usuario", error: error.message },
      { status: 500 }
    );
  }
}


export async function PUT(req, { params }) {
    try {
      const { id } = params; // Prisma espera un string, así que no convertimos a Number
      const { name, telefono, email } = await req.json(); // Captura los datos enviados en el body
  
      console.log("ID recibido para actualizar:", id);
      console.log("Datos recibidos:", { name, telefono });
  
      // Actualizar usuario en la base de datos
      const updatedUser = await prisma.user.update({
        where: { id }, // No convertir a Number si se almacena como string
        data: { name, telefono, email },
      });
  
      return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      return NextResponse.json(
        { message: "Error al actualizar usuario", error: error.message },
        { status: 500 }
      );
    }
  }