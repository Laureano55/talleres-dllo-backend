
// DECLARE ACTION FUNCTION

//punto 1
export async function convertidorTemp(c: number): Promise<number> {
    
    const f = c * (9/5) + 32

    return f
}

//punto 2
export async function resolvedor (a: number, b: number, c: number, sig: number): Promise<number | string>{
    
    let x: number | string
    let signo = sig ?? 1

    
    const discriminante = b ** 2 - 4 * a * c;

    if (discriminante < 0) {
        console.log("No tiene solución real");
        return NaN;
    }

    if (signo === 1) {
        x = (-b + Math.sqrt(discriminante)) / (2 * a);
    } else {
        x = (-b - Math.sqrt(discriminante)) / (2 * a);
    }
    
    return x
    
}

// Punto 3
export async function mejorParidad (num : number): Promise<boolean>{
    
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }

}


// Punto 4

export async function peorParidad (num: number): Promise<boolean | string> {
    

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

    return "no numeros mayores a 10"
}
