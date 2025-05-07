function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

function procesarUsuario(nombre, callback) {
    callback(nombre); // Llamar al callback con el nombre del usuario
}

function despedir(nombre) {
    console.log(`Adiós ${nombre}`);
}

procesarUsuario("Scar", saludar); // Pasar la función saludar como callback
procesarUsuario("Scar", despedir); // Pasar la función despedir como callback