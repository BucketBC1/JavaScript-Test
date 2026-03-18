let i = 0;
let array = [];
do {
    console.log(i)
    i++;

} while (i <= 5);


function convertToBinary1(number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1;) {
        num = parseInt(num / 2);
        binary = (num % 2) + (binary);
    }
    return binary
}

console.log(convertToBinary1(1041));
console.log(1041 % 2)

let num = 1041
let binary = num.toString(2)
console.log(binary)
console.log(binary.length)