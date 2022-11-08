// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.
// esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];



function getTheIndex() {
    let min = parseInt(document.getElementById('minNum').value);
    let max = parseInt(document.getElementById('maxNum').value);
    let newArray = [];

    myArray.forEach((name, index) => {
        if ((index >= min) && (index <= max)) {
            newArray.push(name);
            console.log(newArray);
            document.getElementById('list1').innerHTML = `<li>${newArray} </li>`
        }
    });
}


function getTheIndex2() {
    let min = parseInt(document.getElementById('minNum').value);
    let max = parseInt(document.getElementById('maxNum').value);
    let names = myArray.filter((element, index) => {
        if (index >= min && index <= max) {
            return true;
        }
        return false;
    });
    document.getElementById('list1').innerHTML = `<li>${names} </li>`;
}



// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
// let students = [
//     { name: 'Marco', id: 213, grades: 78 },
//     { name: 'Paola', id: 110, grades: 96 },
//     { name: 'Andrea', id: 250, grades: 48 },
//     { name: 'Gaia', id: 145, grades: 74 },
//     { name: 'Luigi', id: 196, grades: 68 },
//     { name: 'Piero', id: 102, grades: 50 },
//     { name: 'Francesca', id: 120, grades: 84 },
//   ];
// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
];


students.forEach((element) => {
    console.log(element.name.toUpperCase())
})


const worthyStudents = students.filter((element) => {
    if (element.grades > 70) {
        return true;
    }
})
console.log(worthyStudents);

const worthyAndHighStudents = students.filter((element) => {
    if ((element.grades > 70) && (element.id > 120)) {
        return true;
    }
})

console.log(worthyAndHighStudents);


// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


const bikes = [
    {
        name: 'bici1',
        weight: 13,
    },
    {
        name: 'bici2',
        weight: 25,
    },
    {
        name: 'bici3',
        weight: 36,
    },
    {
        name: 'bici4',
        weight: 47,
    },
    {
        name: 'bici5',
        weight: 58,
    },
];



const minWeight = Math.min(...bikes.map(bike => bike.weight));
console.log(minWeight);




document.getElementById('weightSentence').innerHTML = `<h2>The lightest bike we have in stocks weighs ${minWeight} kilograms.</h2>`


// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams = [
    {
        teamName: 'paperopoli',
        points: 0,
        foulsReceived: 0,
    },
    {
        teamName: 'topolinia',
        points: 0,
        foulsReceived: 0,
    },
    {
        teamName: 'gothamFC',
        points: 0,
        foulsReceived: 0,
    },
    {
        teamName: 'squadraForte',
        points: 0,
        foulsReceived: 0,
    },
    {
        teamName: 'squadraScarsa',
        points: 0,
        foulsReceived: 0,
    },
    {
        teamName: 'unaltronome',
        points: 0,
        foulsReceived: 0,
    },
]

teams.forEach((element) => {
    element.points = Math.floor(Math.random()*100);
    element.foulsReceived = Math.floor(Math.random()*50);
})
console.log(teams);

teams.forEach(({teamName, foulsReceived}) => {
    console.log(teamName, foulsReceived);
})



