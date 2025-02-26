import { getUsers } from "./services/llamados.js"; 

const Username = document.getElementById("username");
const password = document.getElementById("password");
const Iniciar = document.getElementById("iniciar");

let verificacion = false;
Iniciar.addEventListener("click", function () {
    validacion();
});


async function validacion() {

    const datos = await getUsers()

    console.log(Username.value);
    console.log(password.value);

    console.log(datos);

    for (let index = 0; index < datos.length; index++) {
        if (datos[index].usuario === Username.value && datos[index].contra === password.value && datos[index].rol === "admin"){
            alert("soy admin")
            verificacion = true;
            window.location.replace('index2.html');

        } else if (datos[index].usuario === Username.value && datos[index].contra === password.value && datos[index].rol === "estudiante"){
            alert("soy estudiante")
            verificacion = true;
            window.location.replace('indexEst.html');
        }
    }
    if(verificacion == false){
        alert("datos incorrectos")
        
    }
}