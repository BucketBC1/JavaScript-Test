const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1)
console.log(good1)


function filterGifts(gifts) {

    // Code here
    let newList = []
    for (let i = 0; i < gifts.length; i++) {
        if (!gifts[i].includes('#')) {
            newList.push(gifts[i])
        }
    }
    return newList
}

