# Instrucciones de Uso

## Registro
- Registrarse como usuario.
- Marcar la casilla para registrarse como **administrador** o **usuario regular**.

## Inicio de Sesión
- Iniciar sesión con el **email** y la **contraseña** registrados.
- En la página principal verás todas las opciones disponibles, pero algunas solo estarán habilitadas si eres **administrador**.

## Ingresar una Venta o Compra
- Ingresar el **monto**, **concepto** y **fecha**.
- Presionar el botón de "**Ingresar**" para guardar la transacción.

## Vista de Transacciones
- En la sección de "**Reportes**", visualizarás una tabla con todas las transacciones, incluyendo el nombre del usuario que las realizó.

## Gestión de Usuarios
- Se podrá ver una lista con los usuarios registrados en la organización.

## Edición de Usuarios
- Desde la lista de usuarios, se podrá presionar el botón de **edición** para modificar sus atributos directamente.

## Tecnologías Usadas
- **Next.js**: Framework utilizado para el desarrollo del proyecto.
- **Auth.js**: Manejo de autenticación y control de acceso.
- **Supabase**: Base de datos utilizada para almacenar la información.
- **Prisma**: ORM para la conexión y manipulación de datos entre la base de datos y la aplicación.
- **Tailwind CSS**: Utilizado para el diseño y la estilización del proyecto.
- **GitHub**: Control de versiones y almacenamiento del código.
- **Vercel**: Plataforma donde el sistema está desplegado.

## Versionamiento
- **Versión 1.0**: Sistema con login funcional.
- **Versión 2.0**: Sistema con ingreso de transacciones funcional.
- **Versión 3.0**: Sistema de vista de reportes funcionando.
- **Versión 4.0**: Tabla de usuarios funcionando.
- **Versión 5.0**: Actualización de usuario funcionando correctamente.
- **Versión 6.0**: Creación de API para validar si el usuario es administrador o no.
- **Versión 7.0**: Creación de la página para iniciar el reporte detallado.

## Despliegue en Vercel
1. Para el despliegue se generó un proyecto en **Vercel**.
2. Se conectó la base de datos creada en **Supabase**.
3. Se generaron las **variables de entorno** para la conexión entre la base de datos y **Prisma**.
4. Se desplegó el proyecto.

Comparto el enlace a la aplicación desplegada en Vercel:  
[https://gestion1.vercel.app/](https://gestion1.vercel.app/)
