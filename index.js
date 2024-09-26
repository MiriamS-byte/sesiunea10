console.log("Hello World"); //afisare, ca si println

//variabila declarata si apoi valoarea atribuita
let userName;
userName = "Ion";
console.log(userName);
// reatribuire alta valoare
userName = "_Maria"
console.log(userName);

//variabila declarata si valoare si initiata cu o valoare in aceeasi linie
let email = "user@desktop.com";
console.log(email);

// declarare constante - trebuie initializate din prima
// nu se poate modifica valoarea
const piNumber = 3.1415;
console.log(piNumber);
// piNumber = 15; - INTERZISA REATRIBUIREA

// operatii aritmetice
const sumResult = 12 + 31;
console.log("Suma 12 + 31 este " + sumResult);
console.log("sumResult: " + sumResult);

const diferenceResult = 33 - 71;
console.log("diferenceResult: " + sumResult);

const a = 7;
const b = 44;
const multiplyResult = a * b;
console.log(`Rezultat inmultire dintre ${a} si ${b} este ${multiplyResult} `);

const divisionResult = 12 / 5;
console.log("divisionResult: " + divisionResult);

// rest impartire (modulo)
const rest = 12 % 5;
console.log("rest impartire: " + rest);

// tipuri de date
// number

let myNumber = 123;
myNumber += 1;
console.log("numarul meu este ", myNumber);
console.log("max safe intiger is: ", Number.MAX_SAFE_INTEGER);
console.log("max safe number: ", Number.MAX_VALUE);

// bigint
let bigNumber = 12345678912345678n;
console.log("big number ", bigNumber);

// string
let userSurname = "Miriam"
console.log("prenumele este ",userSurname);
let firstName = "Schatara";
let lastName = "Miriam";
let fullName = firstName + " " + lastName;
console.log("full name si: ", fullName); //concatenare

// accesare index din string
let secondLetterUserSurname = userSurname[1];
console.log("a doua litera dun surName: ", secondLetterUserSurname);

// substring dintr-un string
let substringUserSurname = userName.substring(0,4);
console.log("substring ",substringUserSurname);

// let firstNameLength = firstName.length;
// console.log("Lungime first name: ",firstNameLength);
console.log("Lungime first name: ",firstName.length); //se poate asa direct, fara sa salvam intr-o variabila
// to upper case si to lower case = metode string
let baseString = "Base";
// let uperS = baseString.toUpperCase;
// let lwerS = baseString.toLowerCase;
console.log("base ", baseString);
console.log("upper ", baseString.toUpperCase());
console.log("lower ", baseString.toLowerCase());

// true sau false - boolean
let isLoggedIn = true;
let isAuthorised = false;
console.log("logged and authorised: ", isLoggedIn, isAuthorised);

// operatori de atribuire
let x = 12; //declarare si atribuire val
console.log(x);
x += 1; //atribuire + adunare
console.log("adaugat 1 ", x);
x -= 2; //atribuire si scadere
console.log("scazut 2 ", x);
x *= 2; //atribuire cu inmultire
console.log("se inmulteste cu 2 ", x);
x /= 3; //atribuire cu impartire
console.log("se imparte la 3 ", x);

// operatori de cmparatie
// verifica egalitatea
let myNameA = "ana";
let nameB = "ana";
let nameC = "Ana Maria";
let myAge = 3;
let yourAge = 3;
let myString = "3";
console.log("myNameA == nameB ",myNameA == nameB);
console.log("myNameA == nameC ",myNameA == nameC);

// verificare egalitate si acelasi tip
console.log("myAge === ypurAge ",myAge === yourAge);
console.log("myAge === myString ",myAge === myString);

// verificare inegalitate
console.log("myNameA !== nameB ",myNameA !== nameB);
console.log("myNameA !== nameC ",myNameA !== nameC);

// operatori logici
// && true daca ambele sunt true, || true daca cel putin una e true, ! negare =inverseaza val unei expresii

