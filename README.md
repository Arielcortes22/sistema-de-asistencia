Este proyecto es una aplicación web que gestiona usuarios y solicitudes. Utiliza HTML, CSS y JavaScript 

Estructura del Proyecto:
HTML: Formularios para login y gestión de solicitudes.
CSS: Estilo para los formularios, tablas y botones con efectos de hover y animaciones.
JavaScript: Funciones que interactúan con un servidor local a través de la API Fetch para obtener, agregar, actualizar y eliminar usuarios y solicitudes.
Funcionalidad:
Login: Los usuarios pueden iniciar sesión como "admin" o "estudiante". Si el login es exitoso, se redirige al usuario a diferentes páginas según su rol.
CRUD de Solicitudes:
Los administradores pueden aceptar solicitudes y actualizar información de estudiantes.
Se pueden eliminar filas de solicitudes visualmente.
Comunicación con el servidor:
GET: Para obtener los datos de los usuarios y solicitudes.
POST: Para crear nuevas solicitudes o usuarios.
PUT: Para actualizar la información de los usuarios o solicitudes.
DELETE: Para eliminar usuarios o solicitudes.
Librerías y Recursos:
SweetAlert2: Para mostrar alertas y notificaciones interactivas.
Bootstrap: Para el diseño y estilo de los botones y tablas.
Este proyecto permite gestionar solicitudes de estudiantes y controlar el acceso de los usuarios según su rol (administrador o estudiante).
