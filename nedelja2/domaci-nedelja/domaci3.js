// Сачувати у променљиве цену и пречник пице
// Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником) 
// Исписати тај резултат у конзолу.

let price = 700;
let precnik = 24;

let poluprecnik = precnik / 2;
let povrsina = Math.PI * Math.pow(poluprecnik, 2);

console.log(price / povrsina);


// За првих 100 бројева исписати:
// FizzBuzz ако је број дељив и са 3 и са 5
// Fizz ако је број дељив само са 3
// Buzz ако је број дељив само са 5
// Број ако није дељив ни са 3 ни са 5
// (1,2,Fizz,4,Buzz,..

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}


// Исписати Марио пирамиду одређене висине:
// За n = 5
//
// #
// ##
// ###
// ####
// #####

let n = 5;

for (let i = 1; i <= n; i++) {
    let s = '';

    for (let j = 0; j < i; j++) {
        s += '#';
    }

    console.log(s);
}


// Исписати Марио пирамиду одређене висине:
// За n = 5
//
//     #
//    ##
//   ###
//  ####
// #####



for (let i = 1; i <= n; i++) {
    let s = '';

    for (let j = n; j >= 1; j--) {
        if (j > i) {
            s += ' ';
        } else {
            s += '#';
        }
    }

    console.log(s);
}


// Исписати Марио пирамиду одређене висине:
// За n = 5

//     # #
//    ## ##
//   ### ###
//  #### ####  
// ##### #####



for (let i = 1; i <= n; i++) {
    let s = '';

    for (let j = n; j >= 1; j--) {
        if (j > i) {
            s += ' ';
        } else {
            s += '#';
        }
    }

    s += ' ';

    for (let j = 0; j < i; j++) {
        s += '#';
    }

    console.log(s);
}