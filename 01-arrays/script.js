const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

//stampa di debug
console.log("array pre modifiche:", teachers);

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = "Patrick";

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
// EDIT: modificato lewisIndex da const a let per poterlo modificare nel ciclo e portare il risultato fuori

const lewisIndex=teachers.indexOf("Lewis")

// Test con findIndex
// const ricercaIndice = (ricerca) => ricerca == "Lewis"
// console.log(teachers.findIndex(ricercaIndice));

// modificata usando il metodo findIndex
// let lewisIndex = null;
// for (let i=0; i<teachers.length; i++) {
//   if (teachers[i] == "Lewis") lewisIndex = i;
// }

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
// EDIT come sopra ho modificato da const a let, ho verificato che sia vuoto vedendo 
// se ha all'interno almeno un elemento con il metodo lenght

const isTeachersEmpty = (teachers.lenght>0);

// if (teachers.length < 1) { isTeachersEmpty = true; }
// else { isTeachersEmpty = false; }

//Stampe di debug
console.log("fourtteachers ", fourthTeacher)
console.log("lastTeacher ", lastTeacher);
console.log("firstTeacher ", firstTeacher);
console.log("lewisIndex ", lewisIndex);
console.log("isTeachersEmpty", isTeachersEmpty );
console.log("array:", teachers);
