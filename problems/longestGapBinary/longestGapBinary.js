function solution(N) {
    // Convertimos el número a binario
    let binary = N.toString(2);

    // Dividimos por '1' para aislar las secuencias de ceros
    let gaps = binary.split('1');

    // Eliminamos el último fragmento porque no cuenta si termina en ceros
    gaps.pop();

    // Calculamos la longitud máxima de los fragmentos
    let longestGap = 0;
    for (let gap of gaps) {
        if (gap.length > longestGap) {
            longestGap = gap.length;
        }
    }

    return longestGap;
}

console.log(solution(1041)) //5
console.log(solution(32)) //0
console.log(solution(529)) //4