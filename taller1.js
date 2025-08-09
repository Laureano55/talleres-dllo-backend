//NOMBRE: Laureano Alberto Lafaurie Del Villar


// Punto 1

function convertidorTemp (c){

    f = c * (9/5) + 32

    return f
}

let temp = -40
console.log(temp + " grados centigrados en fahrenheit es " + convertidorTemp(temp))

// Punto 2

function resolvedor (a, b, c, sig = 1 ){

    if (sig == 1){
        x = (-b + (b**2 - 4*a*c)**0.5)/2*a
    } else {
        x = (-b - (b**2 - 4*a*c)**0.5)/2*a
    }

    return x
}

console.log(resolvedor(1,5,4,2))

// Punto 3

function mejorParidad (num){
    
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }

}

if (mejorParidad(3)){
    console.log("es par")
} else {
    console.log("NO es par")
}

// Punto 4

function peorParidad (num){
    

    const nums = {
        0: true,
        1: false,
        2: true,
        3: false,
        4: true,
        5: false,
        6: true,
        7: false,
        8: true,
        9: false,
        10: true
    };



    if (num == 0) {
        return nums[0]
    } if (num == 1) {
        return nums[1]
    } if (num == 2) {
        return nums[2]
    } if (num == 3) {
        return nums[3]
    } if (num == 4) {
        return nums[4]
    } if (num == 5) {
        return nums[5]
    } if (num == 6) {
        return nums[6]
    } if (num == 7) {
        return nums[7]
    } if (num == 8) {
        return nums[8]
    } if (num == 9) {
        return nums[9]
    } if (num == 10) {
        return nums[10]
    }
}

if (peorParidad(7)){
    console.log("es par")
} else {
    console.log("NO es par")
}
