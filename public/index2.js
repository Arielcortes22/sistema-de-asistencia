let h1 = document.createElement("h1")

h1.textContent=Element;

let botonEliminar = document.createElement("button")

botonEliminar.textContent="Eliminar Dato"

botonEliminar.id="borrar"

console.log(botonEliminar);

h1.innerText=Element

console.log(h1);



val.appendChild(h1)
val.appendChild(botonEliminar)

botonEliminar.addEventListener("click",function () {
    /* boton para remover */
    val.removeChild(h1)
   val.removeChild(botonEliminar)

   })
