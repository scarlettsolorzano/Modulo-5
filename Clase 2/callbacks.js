//callback: función que se pasa como argumento a otra función y se ejecuta después de que la función principal ha terminado su tarea.

//ejemplo: 
function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}!`);
    callback();
}

function despedirse() {
    console.log('Adios!');
}

saludar('Scarlett', despedirse);

//ejemplo de callback con setTimeout
//setTimeout: función que ejecuta una función después de un tiempo determinado
setTimeout(() => console.log('A'), 1000);

