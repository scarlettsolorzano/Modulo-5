function duplicar(numero, callback){
    let resultado = numero * 4;
    callback(resultado); // Llamar al callback con el resultado
}

function duplicado(resultado){
    console.log(`El numero duplicado es: ${resultado}`); //expresion irreducible
}

duplicar(4, duplicado); // Pasar la función duplicado como callback