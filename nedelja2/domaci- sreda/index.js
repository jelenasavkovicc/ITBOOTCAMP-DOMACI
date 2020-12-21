//За два броја (а и б) исписати њихов: Збир,разлику,производ,количник,остатак при дељењу,степен (а^b)
let a = 15;
let b = 8;

console.log('Zbir je ' + (a + b));
console.log('Razlika je ' + (a - b));
console.log('Proizvod je ' + (a * b));
console.log('Kolicnik je ' + (a / b));
console.log('Ostatak pri deljenju je ' + (a % b));
console.log('Stepen je ' + (a ** b));

//Направити променљиву која представља цену производа коју купац жели да купи
//Направити променљиву која представља количину новца коју купац има
//Ако купац нема довољно новца, исписати поруку: "Немате довољно новца", а затим написати тренутно стање (остаје исто)
//Ако има довољно новца, исписати: "Успешно сте купили производ", а затим исписати тренутно стање (сада измењено)
let price = 425;
let sum = 800;

if (price > sum) {
    console.log('Nemate dovoljno novca, trenutno stanje je ' + sum);
} else
    console.log('Uspesno ste kupili proizvod stanje na racunu je ' + (sum - price));

//Направити променљиву која има вредност неког броја (цео број)
//Уколико је број дељив са 3, исписати поруку: Број _ је дељив са 3
//Ако није, Број _ није дељив са 3

let n = 20;
if (n % 3 == 0) {
    console.log('Broj je deljiv sa 3');
} else
    console.log('Broj nije deljiv sa 3');


//Исписати првих 1000 бројева дељивих са 5

for (let i = 1; i <= 1000, i++;) {

    if (i % 5 == 0) { break; }
    console.log(i);
}