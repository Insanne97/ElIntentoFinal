/* COMO AÑADIR UN ELEMENTO AL LOCALSTORAGE */
function guardar_localstorage() {
  var persona = {
    nombre: "Andres",
    edad: 25,
    correo: "andres@gmail.com",
  };

  let nombre = "David";

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("persona", JSON.stringify(persona));
}

/* LLAMADO DE FUNCION */
/* guardar_localstorage(); */





/* COMO OBTENGO EL ELEMENTO GUARDADO */
function obtener_localstorage() {
  if (localStorage.getItem("nombre")) {
    let nombre = localStorage.getItem("nombre"); //Con "nombre" se refiere a la llave o clave que asignamos en el setItem
    let persona = JSON.parse(localStorage.getItem("persona"));

    console.log(nombre);
    console.log(persona);
  }else{
    console.log("No hay entradas en el localStorage");
  }
}

/* LLAMADO DE FUNCION */
obtener_localstorage();
