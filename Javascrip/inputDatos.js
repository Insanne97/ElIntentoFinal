//Variables Globales
var tareas = [];

//Funciones de Boton
var btnAgregar = document.getElementById("btn-agregar");
btnAgregar.addEventListener ("click", clickBtn)

function clickBtn() {
    entradaDatos = document.getElementById("entrada-datos").value;
    if(entradaDatos == 0) {
        alert("Valor de dato invalido");
    }

    tareas.push(entradaDatos);
    mostrarLista();
}

function mostrarLista() {
    var listado = document.getElementById("listado");
    var html =  "";
    for(tarea of tareas) {
        html += tarea + "<br/>";
    }
    listado.innerHTML = html;
}
