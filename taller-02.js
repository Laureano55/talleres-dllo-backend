function findMax(numeros) {
    let max = numeros[0]

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > max) {
            max = numeros[i]
        }
    }
    
    return max
}
let test = [-3,-17,-5,-1,0,-4,0.1]
//console.log(findMax(test))

function includes(numeros, a_encontrar){
    

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] == a_encontrar) {
            return true
        }
    }

    return false
}

test = [-3,-17,-5,-1,0,-4,0.1]

//console.log(includes(test, 3465))

function sum(numeros){
    let total = 0

    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i]
    }

    return total
}
test = [1,6,-1]
//console.log(sum(test))

function missingNumbers(numeros){

    function findmin(){
        let min = numeros[0]

        for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] < min) {
                min = numeros[i]
            }
        }
    
    return min

    }

    let min = findmin(numeros)
    let missingnos = []
    let max = findMax(numeros)
    

    for (let i = min; i < max; i++) {

        if (!includes(numeros, i)){
            missingnos.push(i)
        }
        
    }

    return missingnos
}

//console.log(missingNumbers(test))