const production1 = [
    { toy: 'car', quantity: 3 },
    { toy: 'doll', quantity: 1 },
    { toy: 'ball', quantity: 2 }
]

const result1 = manufactureGifts(production1)
console.log(result1)
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

function manufactureGifts(giftsToProduce) {

  // Code here
    let result = []
    for (let i = 0; i < giftsToProduce.length; i++) {
        const gift = giftsToProduce[i]
        for (let j = 0; j < gift.quantity; j++) {
            result.push(gift.toy)
        }
    }
    return result
}