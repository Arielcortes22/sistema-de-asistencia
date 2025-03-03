import { postUsers } from "./services/llamadosolicitudes.js";

const deleteButtons = document.querySelectorAll('.delete-btn');
const nombre = document.getElementById("nombre");
const soli = document.getElementById("soli");
const id = document.getElementById("id");
const Enviar = document.getElementById("Enviar");
const enviarNombre = document.getElementById("enviarNombre");

  
let nombreEstudianteg = localStorage.getItem('nombre');
let solig = localStorage.getItem('soli');

enviarNombre.textContent = localStorage.getItem('nombre');

let user = localStorage.getItem('nombre');
localStorage.removeItem('user');

console.log(nombreEstudianteg);
console.log(solig);





Enviar.addEventListener("click",function () {
    postUsers(localStorage.getItem("nombre"),soli.value)
})




deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Obtener la fila (tr) que contiene el botón
        const row = button.closest('tr');
        // Eliminar la fila
        row.remove();
    });
});




