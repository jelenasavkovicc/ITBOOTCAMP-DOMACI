// Написати функцију која исписује све елементе низа који су дељиви са 5
function divisibleByFive(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 5 == 0) {
            console.log(arr[i]);
        }
    }
}
console.log(divisibleByFive([1, 2, 3, 4, 5, 10, 15, 23, 1, 5]));



// 2. Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање\
// Уноси се колико пице поједете на месечном нивоу, и колико година имате
// (Рачуна се да је довољно достављати до стоте године)


function lifeSupply(numPerMonth, age) {
    return (100 - age) * 12 * numPerMonth

}

console.log(lifeSupply(10, 26)) // Исписује 8880