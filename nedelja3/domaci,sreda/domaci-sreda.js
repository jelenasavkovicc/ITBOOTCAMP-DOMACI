// Napisati funkciju koja za parametar prima broj sati (0-24) i u zavisnosti od doba dana ispisuje prouke : Dobro jutro, Dobar dan ili Dobro vece

function PartOfTheDay(time) {
    if (time >= 5 && time < 12)
        console.log('Dobro jutro');
    else if (time >= 12 && time < 19)
        console.log('Dobar dan');
    else if (time >= 19 && time > 4)
        console.log('Dobro vece')


}

PartOfTheDay(5);
PartOfTheDay(16);
PartOfTheDay(22);


// Napisati funkciju koja izracunava cenu pice po kvadratnom centimetru (parametri funkcije su poluprecnik u cm , cena pice)



function pizza(radius, price) {
    let r = 24;
    let P = r ** 2 * Math.PI
    if (r > 0 && price > 0)
        return P / price;
}

console.log(pizza(24, 1520));