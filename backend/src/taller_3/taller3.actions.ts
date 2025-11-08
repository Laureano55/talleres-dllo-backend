import { Romana } from './types';

// DECLARE ACTION FUNCTION



//Punto 1
export async function desglosarString(palabra: string, tipo: string): Promise<number | string> {

    if (tipo != "vocales" && tipo != "consonantes"){
       
       return "Tipo de dato incorrecto, debe ser 'vocales' o 'consonantes'"
    }

    let palabra_desglosada = palabra.split("")
    let res = 0
    let vocales = ["a","e","i","o","u"]


    for (let i = 0; i < palabra_desglosada.length; i++) {
        if (vocales.includes(palabra_desglosada[i])){
            res += 1
        }
    }

    if (tipo == "vocales"){
        return res
    }
    return palabra_desglosada.length - res
}

//Punto 2

export async function twoSum(lista: number[], num:number): Promise<number[] | string> {

    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[i] + lista[j] === num) {
                return [i, j];
            }
        }
    }
    
    return "No se encontró respuesta";
}

//Punto 3
export async function  conversionRomana (roman: Romana): Promise<number> {
    let roman_numbers = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let current = 0

    if (roman.length == 1){
        return roman_numbers[roman]
    }

    for (let i = 0; i < roman.length; i++) {
        if (roman_numbers[roman[i] as Romana] < roman_numbers[roman[i+1] as Romana]){
            current += roman_numbers[roman[i+1] as Romana] - roman_numbers[roman[i] as Romana]
            i += 1 

        } else {
            current += roman_numbers[roman[i] as Romana]
        }
        
    }
    return current
}


//Punto 4
export async function descomposicion(mamotretoPAL: string): Promise<string[]> {

    
    let mamotreto: string[] = mamotretoPAL.split(",")
    let pal = mamotreto.splice(0,1)[0]
    
    for (let i = 0; i < mamotreto.length; i++) {
        for (let j = i+1; j < mamotreto.length; j++) {
            if (mamotreto[i] + mamotreto[j] == pal){

                return [mamotreto[i],mamotreto[j]]

            } else if (mamotreto[j] + mamotreto[i] == pal){

                return [mamotreto[j],mamotreto[i]]
            }
            
        }
        
    }

    return ["No se encontró respuesta"]

}
