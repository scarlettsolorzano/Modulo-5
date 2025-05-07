async function name() {
    const container= document.getElementById("user")

    try{ //fech es una funcion que se usa para hacer peticiones a un servidor
        const response = await fetch('https://users.com/users')
        const users = await response.json() //convierte la respuesta en un objeto json
    
        container.innerHTML = users.map(user => `<p>${user.name}</p>`).join('') //map es una funcion que se usa para recorrer un array y crear un nuevo array con los resultados de la funcion que se le pasa como argumento
    }catch(error){
        console.error("error");
    }
}

//try catch (intenta y captura) es una estructura de control que se usa para manejar errores en el codigo. Si el codigo dentro del bloque try genera un error, el bloque catch se ejecuta y se puede manejar el error de manera adecuada. En este caso, si la peticion a la API falla, se mostrara un mensaje de error en la consola.
//fetch es una funcion que se usa para hacer peticiones a un servidor. Se puede usar para obtener datos de una API o enviar datos a un servidor. En este caso, se esta usando para obtener una lista de usuarios de la API https://users.com/users


