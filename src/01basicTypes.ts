// string
let firstName: string = "faisal";
firstName = "nasim";
firstName = firstName.toUpperCase();
console.log(firstName); // Output: NASIM

// number
let amount: number = 69.9999999;
amount = 70.99999999;
console.log(amount); // Output: 70.99999999

// boolean
let isAdmin: boolean = false;
isAdmin = true;
console.log(isAdmin); // Output: true

// Challenge #1: Convert Greeting to Uppercase

let greeting: string = "Hello, Typescript";
greeting = greeting.toUpperCase();
console.log(greeting); // Output: HELLO, TYPESCRIPT

// Challenge #2: Manipulate Age

let age: number = 16;
age += 8;
console.log(age); // Output: 24

// Challenge #3: Check Adult Status

let isAdult: boolean = age >= 18;
console.log(isAdult); // Output: true

// union types
let tax: number | string;
tax = 20;
tax = "$20";

let discount: number | string = 20;
discount = "20%";

// typescript literal
let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "error";

let orderStatus: "pending" | "approved" | "cancelled" = "pending";
orderStatus = "approved";
orderStatus = "cancelled";

// any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = true;

// Arrays
let books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (const book of books) {
  if (book === "1984") {
    foundBook = book;
    foundBook.length; // This will not throw error as foundBook is assured to be a string
    break;
  }
}
console.log(foundBook); // Output: 1984
console.log(foundBook?.length); // Output: 4

let prices: number[] = [12, 12, 34, 56];
let fruits: string[] = ["apple", "mango", "banana", "peach"];
fruits.push("watermelon");
let randomValues: any[] = [12, "apple"];
let names = ["faisal", 24];
let array: (string | boolean)[] = ["apple", true, "orange", false];

let temperature: number[] = [20, 25, 30];
// temperature.push("hot")

let colors: string[] = ["red", "blue", "yellow"];
// colors.push(true)

let mixedArray: (string | number)[] = [1, "two", 3];
