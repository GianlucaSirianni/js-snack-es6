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