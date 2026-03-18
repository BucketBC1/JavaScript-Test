function ejercicio(A){

    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i]
    }
    return sum
}


const array = [1, 2, 3, 4, 5];
console.log(array.length)
console.log(ejercicio(array))
