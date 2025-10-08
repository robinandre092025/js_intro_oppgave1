/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her

console.log("--- DECLARATION ---");

let myString = "Hello, world!";
console.log(`DECLARE string myString: ${myString}`);

const myNumber = 42;
console.log(`DECLARE num myNumber: ${myNumber}`);

let myBoolean = true;
console.log(`DECLARE bool myBoolean: ${myBoolean}`);

const myArray = [123, true, "god jul"];
console.log(`DECLARE array myArray: ${myArray}`);

/******************************************************************************
 OPPGAVE 3
 
Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her

console.log("--- OPERATORS ---");

console.log(`LOG myNumber -> ${myNumber}`); // <-- 42
console.log(`LOG myNumber + 10 -> ${myNumber + 10}`); // <-- 42 + 10 = 52
console.log(`LOG index 0 in myArray * 2 -> ${myArray[0] * 2}`); // <-- 123 * 2 = 246

let myNewNumber = myNumber;
console.log(`DECLARE num myNewNumber -> myNumber`);

myNewNumber += 8; // do operation outside of log to actually apply to the variable
console.log(
  `MATH plus-equals mathematical operator: myNewNumber += 8 -> ${myNewNumber}`
);

console.log(
  `COMPARE less than comperative operator: myNewNumber < 40 -> ${
    myNewNumber < 40
  }`
);

console.log(
  `COMPARE not equal to comperative operator: myNewNumber != 80 -> ${
    myNewNumber != 80
  }`
);

myNewNumber++; // do operation outside of log to actually apply to the variable
console.log(`MATH increment operator: myNewNumber++ -> ${myNewNumber}`);

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-  ning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

// Skriv koden for oppgave 4 her

console.log("--- LOGIC: IF/ELSE ---");

// create 3 users in objects to avoid variable clutter
let userUnnamed = {
  name: "",
  age: 25,
  isLoggedIn: false,
  isBlocked: false,
  goToPage: null,
};

let userBlocked = {
  name: "Blake",
  age: 18,
  isLoggedIn: false,
  isBlocked: true,
  goToPage: null,
};

let userValid = {
  name: "Michael",
  age: 32,
  isLoggedIn: false,
  isBlocked: false,
  goToPage: null,
};

// function to check eligibility for log in, then log in
function logIn(user) {
  if (user.name !== "" && user.age >= 18 && !user.isBlocked) {
    user.isLoggedIn = true;
    user.goToPage = "/home";
    console.log(`Successfully logged in as: ${user.name}`);
  } else {
    if (user.name == "") {
      console.log("Log in failed: Please enter a username!");
    }
    if (user.age < 18) {
      console.log("Log in failed: You must be over 18 years old!");
    }
    if (user.isBlocked) {
      console.log("Log in failed: You are blocked from this site!");
    }
  }
}

console.log(`Attempt to log in with "userUnnamed":`);
logIn(userUnnamed);

console.log(`Attempt to log in with "userBlocked":`);
logIn(userBlocked);

console.log(`Attempt to log in with "userValid":`);
logIn(userValid);

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

// Skriv koden for oppgave 5 her

console.log("--- TERNARY CONDITIONAL ---");

const userMale = false;
console.log(`DECLARE const bool userMale: ${userMale}`);

const userTitle = userMale ? "Mr. " : "Mrs. ";
console.log(`DECLARE ternary string userTitle: userName ? "Mr. " : "Mrs. "`);

console.log(`LOG userTitle -> ${userTitle}`);
