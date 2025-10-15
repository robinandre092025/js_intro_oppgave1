/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.
******************************************************************************/

/******************************************************************************
1.
Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)
******************************************************************************/

console.log("--- ODD / EVEN ---");

let oddNum = 517;
let evenNum = 48;
console.log(`DECLARE num oddNum:\n`, oddNum);
console.log(`DECLARE num evenNum:\n`, evenNum);

// running the checks here to demonstrate hoisting
console.log(`RUN checkOdd(oddNum):\n`, checkOdd(oddNum));
console.log(`RUN checkOdd(evenNum):\n`, checkOdd(evenNum));

function checkOdd(num) {
  // if (!Number(num)) {
  //   return console.log(`ERROR "${num}" is not a valid number.`);
  // }

  return num % 2 === 1;
}

/******************************************************************************
2.
Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"
******************************************************************************/

console.log("--- STRING MANIPULATION ---");

let kulStr = "Dette er kult";
console.log(`DECLARE str kulStr:\n`, kulStr);

// arrow function, note {} and return are omitted for single expression
const makeExcited = (str) => str.toUpperCase() + "!";

// running the check here because arrow functions do not hoist
console.log(`RUN makeExcited(kulStr):\n`, makeExcited(kulStr));

/******************************************************************************
3.Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.
******************************************************************************/

console.log(`--- GREETER ---`);

let userName = "Steve";
let randomTime = Math.floor(Math.random() * 24); // randomly generate a number between 0 and 24

console.log(`DECLARE str name:\n`, userName);
console.log(`DECLARE num randomTime:\n`, randomTime);

console.log(`RUN greet(userName, randomTime):\n`, greet(userName, randomTime));

function greet(name, time) {
  // if (!name) {
  //   console.log(`ERROR greet():\nValid name is required!`);
  // }

  if (time < 0 || time > 24) {
    return "Invalid time!";
  } else {
    if (time >= 0 && time <= 5) {
      return `Good night, ${name}!`;
    }
    if (time >= 6 && time <= 11) {
      return `Good morning, ${name}!`;
    }
    if (time >= 12 && time <= 17) {
      return `Good afternoon, ${name}!`;
    }
    if (time >= 18 && time <= 23) {
      return `Good evening, ${name}!`;
    }
  }
}

/******************************************************************************
4.Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].
******************************************************************************/

console.log(`--- ARRAY MANIPULATION ---`);

let colors = ["Red", "Green", "Blue", "Yellow"];
let numbers = ["One", "Two", "Three", "Four", "Five", "Six"];

console.log(`DECLARE arr colors:\n`, colors);
console.log(`DECLARE arr numbers:\n`, numbers);

const trimArray = (arr) => arr.slice(1, -1);

console.log(`RUN trimArray(colors):\n`, trimArray(colors));
console.log(`RUN trimArray(numbers):\n`, trimArray(numbers));

/******************************************************************************
5.Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".
******************************************************************************/

console.log(`--- STRING MANIPULATION 2 ---`);

let str1 = "  Javascript er vanskelig   ";
let str2 = " Det er vanskelig å bruke metoder ";
let str3 = "   vanskelig        ";

console.log(`DECLARE str str1:\n`, str1);
console.log(`DECLARE str str2:\n`, str2);
console.log(`DECLARE str str3:\n`, str3);

const fixString = (str) => str.trim().replace("vanskelig", "gøy");

console.log(`RUN fixString(str2):\n`, fixString(str2));
console.log(`RUN fixString(str1):\n`, fixString(str1));
console.log(`RUN fixString(str3):\n`, fixString(str3));

/******************************************************************************
6.Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".
******************************************************************************/

console.log(`--- ARRAY MANIPULATION 2 ---`);

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

console.log(`DECLARE arr items: `, items);

function arrManipulation(arr) {
  arr.shift();
  arr[arr.indexOf("Viskelær")] = "Linjal";
  arr.splice(0, 2, "Markeringspenn");
  return arr.join(" | ");
}
console.log(`RUN arrManipulation(items):\n`, arrManipulation(items));

/******************************************************************************
7.EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]
******************************************************************************/

console.log(`--- EXTRA CHALLENGE 1 ---`);

let extraArr1 = ["Red", "Green"];
let extraArr2 = ["Red", "Green", "Blue"];
let extraArr3 = ["One", "Two", "Three"];
let extraArr4 = ["One", "Two", "Three"];

console.log(`DECLARE arr extraArr1:\n`, extraArr1);
console.log(`DECLARE arr extraArr2:\n`, extraArr2);
console.log(`DECLARE arr extraArr3:\n`, extraArr3);
console.log(`DECLARE arr extraArr4:\n`, extraArr4);

function extraArrManip(arr, str) {
  // if (!str) {
  //   return "ERROR No string found!";
  // }
  //
  // I've had checks like this for pretty much every function in this assignment, but it's not really necessary

  if (arr.includes(str)) {
    arr.splice(arr.indexOf(str), 1);
  } else {
    arr.push(str);
  }

  return arr;
}

console.log(`RUN extraArrManip(extraArr1, "Blue"):\n`, extraArrManip(extraArr1, "Blue"));
console.log(`RUN extraArrManip(extraArr2, "Green"):\n`, extraArrManip(extraArr2, "Green"));
console.log(`RUN extraArrManip(extraArr3, "Four"):\n`, extraArrManip(extraArr3, "Four"));
console.log(`RUN extraArrManip(extraArr4, "Two"):\n`, extraArrManip(extraArr4, "Two"));

/******************************************************************************
8.EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

console.log(`--- EXTRA CHALLENGE 2 ---`);

let extraStr = "Heisann";
let extraNum = 210;
let extraBool = false;
let extraArr = [123, "hei", 456];

console.log(`DECLARE str extraStr:\n`, extraStr);
console.log(`DECLARE num extraNum:\n`, extraNum);
console.log(`DECLARE bool extraBool:\n`, extraBool);
console.log(`DECLARE arr extraArr:\n`, extraArr);

console.log(`RUN coolify(extraStr):\n`, coolify(extraStr));
console.log(`RUN coolify(extraNum):\n`, coolify(extraNum));
console.log(`RUN coolify(extraBool):\n`, coolify(extraBool));
console.log(`RUN coolify(extraArr):\n`, coolify(extraArr));

function coolify(input) {
  const face = "😎";

  if (typeof input === "string") {
    return face + input + face;
  } else if (typeof input === "number") {
    return face + (input * 2).toString() + face;
  } else if (typeof input === "boolean") {
    return input ? face + "Yes" + face : face + "Relax..." + face;
  } else {
    return face + "Only primitive types..." + face;
  }
}
