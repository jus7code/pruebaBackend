import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/db.js";
import bcrypt from "bcrypt";

export const authOptions = {
    
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials);
               
                const UserFound = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }

                })

                if(!UserFound) throw new Error(JSON.stringify({status: 404, message: "Usuario no encontrado"}))
                console.log(UserFound)
                const matchPassword =await bcrypt.compare(credentials.password, UserFound.password)
                if (!matchPassword) throw new Error("Contraseña incorrecta");

                return{
                    id: UserFound.id,
                    name: UserFound.name,
                    email: UserFound.email
                }
                    
                
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",  // Página personalizada de inicio de sesión
        signOut: "/",
// Página personalizada de errores
      }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
