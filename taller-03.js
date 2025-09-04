function desglosarString(palabra, tipo){

    if (tipo != "vocales" && tipo != "consonantes"){
       console.log("Tipo de dato incorrecto, debe ser 'vocales' o 'consonantes'")
       return
    }

    palabra = palabra.split("")
    let res = 0
    let vocales = ["a","e","i","o","u"]


    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])){
            res += 1
        }
    }

    if (tipo == "vocales"){
        return res
    }
    return palabra.length - res
}

//console.log(desglosarString("murcielagos", "vocales"))

function twoSum(lista, num) {

    let indexes = [0,0]
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] + lista[i+1] == num){
            indexes[0] = i
            indexes[1] = i+1
            return indexes
        }
    }

    console.log("No se encontró respuesta")
    return
}

//console.log(twoSum([3,4,2], 18))

function  conversionRomana (roman) {
    let roman_numbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let current = 0
    if (roman.length == 1){
        return roman_numbers[roman]
    }

    for (let i = 0; i < roman.length; i++) {
        if (roman_numbers[roman[i]] < roman_numbers[roman[i+1]]){
            current += roman_numbers[roman[i+1]] - roman_numbers[roman[i]]
            i += 1 

        } else {
            current += roman_numbers[roman[i]]
        }
        
    }
    return current
}

//console.log(conversionRomana("XIV"))

function descomposicion(mamotreto) {
    
    mamotreto = mamotreto.split(",")
    let pal = mamotreto.splice(0,1)
    
    for (let i = 0; i < mamotreto.length; i++) {
        for (let j = i+1; j < mamotreto.length; j++) {
            if (mamotreto[i] + mamotreto[j] == pal){
                return [mamotreto[i],mamotreto[j]]
            } else if (mamotreto[j] + mamotreto[i] == pal){
                return [mamotreto[j],mamotreto[i]]
            }
            
        }
        
    }
    console.log("No se encontró respuesta")
    return

}

//console.log(descomposicion("malhumor,al,hum,humor,m,mal,malhu"))