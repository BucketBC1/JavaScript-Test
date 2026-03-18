
function drawGift(size, symbol) {

    let result = "";
    if (size < 2) {
        return "";
    } else {
        for (let fila = 0; fila < size; fila++) { //
            //primera y ultima fila
            if (fila === 0) {
                result += symbol.repeat(size) + '\n';
            } else if (fila === size - 1) {
                result += symbol.repeat(size);
            } else {
                result += symbol + " ".repeat(size - 2) + symbol + '\n';
            }
        }
    }
    return result;
}

const g1 = drawGift(4, '*')
console.log(g1)

const g2 = drawGift(1, '+')
console.log(g2)

const g3 = drawGift(2, '#')
console.log(g3)

let ejemplo = "#";
console.log(ejemplo.repeat(2));