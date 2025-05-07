const user ={
    "nombre":"Scarlett",
    "edad": 21,
    "email":"ssolorzano0@ucol.mx",

}

const userString = JSON.stringify(user) //convierte el objeto en un string json
console.log('JSON: ', userString); 

const userObject = JSON.parse(userString) //convierte el string json en un objeto
console.log('Usuario: ${user.nombre}, ${user.edad},${user.email} ' ); //muestra el nombre del usuario

function mostrar(user, callback){
    console.log(`Bienvenido ${user.nombre}`); //muestra el nombre del usuario
    callback(); 
}

