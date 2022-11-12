var boton = document.getElementById("btn");
boton.addEventListener("click", clickbtn);

var personas = [];

function clickbtn() {
    var nombre = document.getElementById("txtnombre").value;
    var apellido = document.getElementById("txtapellido").value;
    var telefono = document.getElementById("txttelefono").value;
    var email = document.getElementById("txtemail").value;

    /* CREAMOS UN OBJETO PERSONA */
    var persona = {
        "nombre": nombre,
        "apellido": apellido,
        "telefono": telefono,
        "email": email
    }

    if(nombre == 0 && apellido == 0 && telefono == 0, email == 0) {
        alert("Uno o más campos se encuentra vacio")
    } else {
        personas.push(persona)
        mostrarLista()
    }
}

function mostrarLista() {
    var lista = document.getElementById("listado");
    var html = "";
    for(persona of personas){
        html += "Nombre: " + persona.nombre + " " + "Apellido: " + persona.apellido + " " +  "Teléfono: " + persona.telefono + " " +  "Email: " + persona.email + "<br/>";
    }
    lista.innerHTML = html;
}