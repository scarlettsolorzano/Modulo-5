//json: formtado estandar para el intercambio de datos badaso en texto
//json (JavaScript Object Notation)

//se representan en parea "clave-valor"
//ejemplo:

console.log(JSON.parse('{"empresa":{"empleados":[{"nombre":"Carlos"}]}}').empresa.empleados[0].nombre)

const persona = {
    "nombre": "Scarlett",
      
    "edad": 21,
      
    "esEstudiante": true,
      
    "materias": ["Programación", "Ingles", "Calidad de Software"],
      
}

//función de JavaScript se usa para convertir una cadena JSON a un objeto JavaScript es json.parse()


//ejemplo de conversión de json a objeto de js
const jsonData = '{"nombre": "Scarlett", "edad": 21, "esEstudiante": true, "materias": ["Programación", "Ingles", "Calidad de Software"]}';
const objeto = JSON.parse(jsonData); //convierte el json a un objeto de js
console.log(objeto.nombre); 
console.log(objeto.edad); 
console.log(objeto.esEstudiante); 

console.log(JSON.stringify({nombre: "Carlos"}));

//para convertir un objeto de js a json se usa el método JSON.stringify()
const estudiante = {
    nombre: "Scarlett", 
    edad: 21,
    esEstudiante: true,
    materias: ["Programación", "Ingles", "Calidad de Software"],
};
const jsonString = JSON.stringify(estudiante); //convierte el objeto a json
console.log(jsonString); //imprime el json en formato de texto

//colecciones con js 
//colecciones: estrucutura de datos que agrupan elemntos: arrays, objetos, mapas y conjuntos)

//arreglo en js
{

    "estudiantes"; [
  
      { "nombre": "Carlos", "edad": 25 },
  
      { "nombre": "Ana", "edad": 22 },
  
      { "nombre": "Luis", "edad": 23 }
  
    ]
  
  }

//convertir un arreglo js a objeto en javaScript
const jsonArray = '[{"nombre": "Carlos", "edad": 25}, {"nombre": "Ana", "edad": 22}, {"nombre": "Luis", "edad": 23}]';
const data= JSON.parse(jsonArray); //convierte el json a un objeto de js
console.log(data[0].nombre); //imprime el nombre del primer estudiante
console.log(data[1].edad); 
 
//objeto JSON con objeto anidado
{

    "empresa"; {
  
      "nombre"; "Tech Solutions",
  
      "ubicacion"; "Madrid",
  
      "empleados"; [
  
        { "nombre": "Carlos", "cargo": "Desarrollador", "edad": 30 },
  
        { "nombre": "Ana", "cargo": "Diseñadora", "edad": 28 }
  
      ]
  
    }
  
  }

  const jsonAnidado= '{"empresa":{"nombre":"Tech Solutions","ubicacion":"Madrid","empleados":[{"nombre":"Carlos","cargo":"Desarrollador","edad":30},{"nombre":"Ana","cargo":"Diseñadora","edad":28}]}}';

const dataAnidada = JSON.parse(jsonAnidado);

console.log(data.empresa.nombre);      // "Tech Solutions"

console.log(data.empresa.empleados[0].cargo); // "Desarrollador"

//obtener datos de una API en formato JSON:
fetch('https://api.example.com/usuarios')

  .then(response => response.json())

  .then(data => {

    console.log(data);

  })

  .catch(error => console.error('Error:', error));
// fetch realiza una solicitud a la API, respuesta en formato JSON. Response.json() convierte la respuesta en una estructura de datos de JavaScript para que podamos trabajar con ella.

// Guardar datos en localStorage

const usuario = {

    nombre: "Lucía",
  
    edad: 30
  
  };
  
  localStorage.setItem('usuario', JSON.stringify(usuario));
  
  // Recuperar datos de localStorage
  
  const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
  
  console.log(usuarioGuardado.nombre); // "Lucía"