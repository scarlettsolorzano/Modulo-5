//para poder usar away en ella 
async function taskSlow(){
    console.log("Esta iniciando la tarea")

    //resolve es una funcion que se va a llamar cuando la tarea se complete
    //setTimeout es una funcion que se va a ejecutar en un tiempo determinado

    //funcion de flecha anonima
    await new Promise (resolve => { //sin bloquear el resto del programa 
        setTimeout(() => { //simular que una tarea se esta tardando
            console.log("Tarea completada")
            resolve() //se va a llamar cunado se pasa el tiempo
        },5000)
    })
    console.log("Termino la tarea")
}
function taskFast(){
    console.log("Esta tarea se ejecutó primero")
}

//llamar la funcion
taskSlow() 
taskFast() 

setInterval(() => {
    console.log("Tarea finalizada");
},5000) //ejecuta la funcion cada 5 segundos

console.log("Fin");