Instrucciones de uso

Registro

Registrarse como usuario.

Marcar la casilla para registrarse como administrador o usuario regular.

Inicio de sesión

Iniciar sesión con el email y la contraseña registrados.

En la página principal verás todas las opciones disponibles, pero algunas solo estarán habilitadas si eres administrador.

Ingresar una venta o compra

Ingresar el monto, concepto y fecha.

Presionar el botón de "Ingresar" para guardar la transacción.

Vista de transacciones

En la sección de "Reportes", visualizarás una tabla con todas las transacciones, incluyendo el nombre del usuario que las realizó.

Gestión de usuarios

Se podrá ver una lista con los usuarios registrados en la organización.

Edición de usuarios

Desde la lista de usuarios, se podrá presionar el botón de edición para modificar sus atributos directamente.

Tecnologías usadas

Next.js: Framework utilizado para el desarrollo del proyecto.

Auth.js: Manejo de autenticación y control de acceso.

Supabase: Base de datos utilizada para almacenar la información.

Prisma: ORM para la conexión y manipulación de datos entre la base de datos y la aplicación.

Tailwind CSS: Utilizado para el diseño y la estilización del proyecto.

GitHub: Control de versiones y almacenamiento del código.

Vercel: Plataforma donde el sistema está desplegado.

Versionamiento

Versión 1.0: Sistema con login funcional.

Versión 2.0: Sistema con ingreso de transacciones funcional.

Version 3.0: Sistema de vista de reportes funcionando.

Version 4.0: tabla de usuarios funcionando.

Version 5.0: actualización de usuario funcionando correctamente.

Version 6.0: Creación de API para validar si el usuario es administrador o no.

Version 7.0: Creación de la pagina para inciar el reporte detallado.


Despliegue en vercel:

Dado que vercel for free necesita autenticar a los usuarios que deseen ver
para desplegar el proyecto en vercel se deben 
1. Subir las variables de entorno locales del archivo .env
2. Clonar el repositorio git
3. npx vercel link
4. npm i -g vercel
5. npm i -g vercel@latest
6. vercel build    

Comparto el enlace a la aplicacionm desplegada en vercel
https://prueba-backend-git-main-jus7codes-projects.vercel.app
