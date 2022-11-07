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


const worthyStudents = students.filter((element) =>{
    if (element.grades > 70){
        return true;
    }
})
console.log(worthyStudents);

const worthyAndHighStudents = students.filter((element) =>{
    if ((element.grades > 70) && (element.id > 120)){
        return true;
    }
})

console.log(worthyAndHighStudents);