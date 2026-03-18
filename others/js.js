/* let array = ["-", "*", "-", "*", "*", "-", "*" , "*", "-", "-"];
const str = "#";

function replace(array, str) {
    return array.map(item => item === "*" ? str : item);
}

console.log(replace(array, str));  */

function square(n){
    let result = [];
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            if(i === 1 || i === n || j === 1 || j === n){
                result.push("#");
            } else {
                result.push(" ");
            }
        }
    }
    return result;
}

console.log(square(5));