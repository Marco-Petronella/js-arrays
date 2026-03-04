const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// stampa di debug
console.log(teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
for (let i=0; i<teachers.length; i++)
  reversedTeachers.unshift(teachers[i]);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i=0; i<teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}

// 3. Rimuovi 'Ed' dall'array teachers

for (let i=0;i<teachers.length;i++) {
  if (teachers[i]=="Ed") {
    delete teachers[i];
  }
}

// *********************************** BONUS PERSONALE *****************************************

// Dal momento che la richiesta era di non usare metodi ho trovato la soluzione che mi sembrava
// più adatta con la funzione "delete", in alternativa per test lo ho risolto con splice:

// for (let i=0; i<teachers.length; i++) {
//   if (teachers[i] == "Ed") {
//     teachers.splice(i,1);
//   }
// }

// Altra alternativa che però mi sembra più macchinosa rispetto agli altri esercizi quindi l'ho fatta solo per
// sfida personale
// ho creato un array di supporto in cui ho shiftato fino a svuotare tuti gli elementi di teachers
// che non fossero ED, poi ho di nuovo riversato l'array in teachers
// in questo modo non ho lo spazio "undefined" che crea delete
// per evitare il ciclo while avrei potuto usare un "for (let i=0; teachers.lenght>0;i++)"
// che però mi avrebbe fatto crare una variabile i che in effetti non avrei mai letto
// dal momento che leggendo la documentazione avevo già visto il while ho preferito usare quello

// const teachersSupportArray = [];
//
// while(teachers.length > 0) {
//   if (teachers[0] != "Ed") {
//     teachersSupportArray.push(teachers.shift()) ;
//   } else { 
//     teachers.shift(); 
//   }
// }
// while (teachersSupportArray.length>0) {
//   teachers.unshift(teachersSupportArray.pop());
// }
// *****************************************************************************************************************


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false;
for (let i=0; i<teachers.length;i++) {
  if (teachers[i] == "Fabio") isFabioPresent = true;
}

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
// EDIT: ho messo il controllo su undefined perchè la funzione delete mi crea uno spazio undefined nell'array che poi 
// verrebbe scritto nella stringa
let teachersString = teachers[0];
for (let i=1; i<teachers.length; i++) {
  if (teachers[i] != undefined) teachersString= `${teachersString}, ${teachers[i]}`;
}

// stampa di debug
console.log(reversedTeachers);
console.log(longNames);
console.log(isFabioPresent);
console.log(teachersString);
console.log(teachers);




