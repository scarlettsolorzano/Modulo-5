//aplicación de consola para gestionar una biblioteca
//consultar los libros en formato json, agregar libros, actualizar disponibilidad

// Datos iniciales de libros en formato JSON
//objeto json 
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON utilizando un callback)
function leerDatos(callback) {
    setTimeout(() => {
        // Aquí simulas leer el JSON con un retraso de 1 segundo
        callback(biblioteca);
    }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    // simulación de escribir el libro (agregarlo al objeto)
    setTimeout(() => {
        biblioteca.libros.push(nuevoLibro);
        console.log(`Libro agregado: ${titulo} - ${autor}`);
        mostrarLibros();
    }, 1000);

}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    setTimeout(() => {
        let libro = biblioteca.libros.find(l => l.titulo === titulo);
        if (libro) {
            libro.disponible = nuevoEstado;
            console.log(`\nDisponibilidad actualizada para "${titulo}": ${nuevoEstado ? 'Disponible' : 'Prestado'}`);
        } else {
            console.log(`\nLibro no encontrado: "${titulo}"`);
        }
        mostrarLibros(); // Mostrar el inventario actualizado
    }, 1000);
}

//ejecución
mostrarLibros();
agregarLibro("Harry Potter y el caliz de fuego", "J.K. Rowling", "Fantasía", true);
actualizarDisponibilidad("2001", false);