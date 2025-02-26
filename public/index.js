import { getUsers } from "./services/llamados.js"; 

const Username = document.getElementById("username");
const password = document.getElementById("password");
const Iniciar = document.getElementById("iniciar");
  


let verificacion = false;
Iniciar.addEventListener("click", function () {
    validacion();
});

/* arreglar esto */
obtener_localStorage();

function obtener_localStorage(){
    if(localStorage.getItem("users") ) {

        let  Usuarios = localStorage.getItem("users");
        let persona = JSON.parse(localStorage.getItem("personas") );

        console.log(Usuarios);
        console.log(persona);
        
        
    }else{
        console.log("NO hay nada");
        
    }
}
/* final de lo que hay que arreglar */

    


async function validacion() {

    const datos = await getUsers()

    console.log(Username.value);
    console.log(password.value);

    console.log(datos);

    for (let index = 0; index < datos.length; index++) {
        if (datos[index].usuario === Username.value && datos[index].contra === password.value && datos[index].rol === "admin"){
           await  Swal.fire({
                title: 'Redirigiendo...',
                html: 'Por favor espera...',
                timerProgressBar: true,
                showConfirmButton: false,
                timer:1500,
                didOpen: () => {
                    Swal.showLoading(); /* Muestra la rueda de carga */
                }
            });
            /* Cerrar el SweetAlert y después de 4 segundos y redirigir */
            setTimeout(() => {
                Swal.close(); /* Cierra el SweetAlert después del tiempo */
                /* Redirigir a la nueva página después de 3 segundos */
                setTimeout(() => {
                    window.location.href = "http://localhost:3003/index2.html";
                });
            }); /* 4 segundos aqui o se puede configurar a gusto */
            verificacion = true;
            window.location.replace('index2.html');

        } else if (datos[index].usuario === Username.value && datos[index].contra === password.value && datos[index].rol === "estudiante"){
            Swal.fire({
                icon: 'warning',
                title: 'Rellene los campos ',
                text: 'Por favor, asegúrate de llenar todos los campos.',
                showConfirmButton: true,
            });
            verificacion = true;
            window.location.replace('indexEst.html');
        }
    }
    if(verificacion == false){
        Swal.fire({
            icon: 'warning',
            title: ' incorrect ',
            text: ' asegúrate de llenar todos los campos con informacion correcta.',
            showConfirmButton: true,
        });
        
    }
}
