
const fibonacciSquence = (n) => {
    let result = [];
    let next;
    let first = 0;
    let second = 1;
    for(let i = 0; i < n; i++) {
        next = first + second;
        result.push(next);
        first = second;
        second = next;
    }
    return result;
}

console.log(fibonacciSquence(10)); // []