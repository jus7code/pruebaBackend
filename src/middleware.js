import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/login", // Debe coincidir con la configuración de `[...nextauth].js` // Debe coincidir con `[...nextauth].js`
    signOut: "/", // Debe coincidir con la configuración de `[...nextauth].js`
  }
});

export const config = {
    matcher: ["/dashboard/:path*"], // Solo protege `/dashboard` y sus subrutas
  };