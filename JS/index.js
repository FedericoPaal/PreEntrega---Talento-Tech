/*
const edad = 18

console.log("Es mayor de edad")
if (edad >= 18){
}
else{
    console.log("Es menor de edad")
}
*/

//For of
function sumarPares(numeros) {
    let suma = 0
    for (const numero of numeros){
        if(numero % 2 === 0){
            suma += numero
        }
    }
    return suma
}

//const llamada = sumarPares([1, 2, 3, 4, 5, 6])

//console.log(llamada)

//ForEach
function sumarPares(numeros) {
    let suma = 0
    numeros.forEach(numero => {
        if(numero % 2 === 0){
            suma += numero
        }
    })
    return suma
}

const llamada = sumarPares([1, 2, 3, 4, 5, 6])

console.log(llamada)
