//  Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)

// Име
// Врста
// Способности (низ способности покемона)
// Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))
// Даље, направити низ од ових објеката

// пикачу:
// име: пикачу
// врста: електрични
// способности: Статички електрицитет,...
// карактеристике: напад: 55, одбрана: 30, брзина: 90
// Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

// [<...>,...]
// Сортирати покемоне по брзини, растуће.



let pokemoni = [{
        ime: 'Lapras',
        vrsta: 'Ledeni',
        sposobnost: 'Bljesak',
        karakteristike: {
            napad: 85,
            odbrana: 85,
            brzina: 60
        }
    },
    {
        ime: 'Arcanine',
        vrsta: 'Vatreni',
        sposobnost: 'Bljesak vatre',
        karakteristike: {
            napad: 110,
            odbrana: 80,
            brzina: 95
        }
    },
    {
        ime: 'Hoppip',
        vrsta: 'Travnati/leteci',
        sposobnost: 'Krolofil',
        karakteristike: {
            napad: 35,
            odbrana: 40,
            brzina: 50
        }
    },
    {
        ime: 'Horsea',
        vrsta: 'Vodeni',
        sposobnost: 'Hitro plivanje/snajper',
        karakteristike: {
            napad: 40,
            odbrana: 70,
            brzina: 65
        }
    }
]

function niz(pokemoni) {
    let niz1 = []

    pokemoni.forEach(pokemon => pokemon.sposobnost)

    for (let el of pokemoni) {
        niz1.push(el.sposobnost)
    }
    return niz1
}

console.log(niz(pokemoni));

pokemoni.sort((k, b) => k.karakteristike.brzina - b.karakteristike.brzina)

for (i = 0; i < pokemoni.length; i++) {
    console.log(pokemoni[i].karakteristike.brzina);
}