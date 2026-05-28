// INTEGRANTES
// Jazmin Zorrilla
// Giovanni Rojas

function enviarDatos() {
    // EL js entra al HTML y captura lo que escribio el usuario.
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const edad = document.getElementById("edad").value;

    // Creamos un objeto JavaScript con los datos del usuario.
    // Organizamos los datos.
    const usuario = {
        nombre: nombre,
        email: email,
        edad: Number(edad)
    };


    //Convertimos el objeto JavaScript a JSON.
    // JSON.stringify() convierte un objeto JavaScript a una cadena JSON.
    // El segundo parámetro es una función de reemplazo (en este caso, null) y el 
    // tercer parámetro es el número de espacios para la sangría (en este caso, 2)
    // para hacer que el JSON sea más legible.
    const jsonUsuario = JSON.stringify(usuario, null, 2);

    console.clear();

    console.log("Objeto JavaScript:");
    console.log(usuario);

    console.log("JSON enviado al PHP:");
    console.log(    jsonUsuario);

    // Enviamos el JSON al servidor usando fetch.
    // fetch() es una función que permite hacer solicitudes HTTP desde JavaScript.
    fetch("procesar.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonUsuario
    })

    // EL JS RECIBE la respuesta del servidor 
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta recibida desde PHP:");
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
