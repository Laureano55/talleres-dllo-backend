
// DECLARE ACTION FUNCTION

//punto 1
export async function findMax(numeros: number[]): Promise<number>{
    let max = numeros[0]

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > max) {
            max = numeros[i]
        }
    }
    
    return max
}
//Punto 2

export async function includes(numeros: number[], a_encontrar: number): Promise<boolean>{
    

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] == a_encontrar) {
            return true
        }
    }

    return false
}

//Punto 3

export async function sum(numeros: number[]): Promise<number>{
    let total = 0

    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i]
    }

    return total
}
//Punto 4

export async function missingNumbers(numeros: number[]): Promise<number[]>{

    function findmin(){
        let min = numeros[0]

        for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] < min) {
                min = numeros[i]
            }
        }

    return min

    }

    let min = findmin()
    let missingnos = []
    let max = await findMax(numeros)

    for (let i = min; i <= max; i++) {
        
        if (! (await includes(numeros, i))){
            missingnos.push(i)
            
        }
        
    }

    return missingnos
}
