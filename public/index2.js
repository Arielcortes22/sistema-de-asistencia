import { getUsers, postUsers } from "./services/llamados.js"; 

// Obtener elementos del DOM
const nombreEstudiante = document.getElementById("infoNombre");
const mostrarNombre = document.getElementById("mostrarNombre");
const mostrarSolicitud = document.getElementById("infoSolicitud");
const sede = document.getElementById("sede");
const deleteButtons = document.querySelectorAll('.delete-btn');
const Aceptar = document.getElementById("Aceptar");
const coso1 = document.getElementById("coso1");
const Enviar = document.getElementById("Enviar");


let soli = localStorage.getItem("infosolicitud");
console.log(soli);


let user = localStorage.getItem("nombre");
console.log(user);






mostrarRepuestas()
async function mostrarRepuestas() {
    
    const datos = await getUsers()
    
    datos.forEach(Element=>{


        contenedor.inertext = Element.tabla1
    })
    

    
}

// Mostrar usuarios al cargar la página
MostrarUsuarios();


function MostrarUsuarios() {
    // Muestra el nombre del usuario obtenido de localStorage
    mostrarNombre.textContent = user;
}

// Evento para el botón "Aceptar"
Aceptar.addEventListener("click", async function() {
    await Swal.fire({
        title: 'Espera',
        html: 'Aceptada',
        timerProgressBar: true, // Muestra la barra de progreso
        showConfirmButton: false, // No muestra el botón de confirmación
        timer: 1500, // Tiempo en milisegundos (1.5 segundos)
        didOpen: () => {
            Swal.showLoading(); // Muestra la rueda de carga mientras se espera
        }
    });

    // Eliminar el elemento con id "coso1" después de la alerta
    if (coso1) {
        coso1.remove();
    }
});

// Función para manejar la eliminación de filas
deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Obtener la fila (tr) que contiene el botón
        const row = button.closest('tr');
        // Eliminar la fila
        row.remove();
    });
});

// Evento para el botón "Enviar Datos"
