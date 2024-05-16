// * Generics - Fundamentals

// Generics in TypeScript are a way to create reusable code components that work with a variety of types as opposed to a single one.

// In other words, generics allow you to write a function or a class that can work with any data type. You can think of generics as a kind of variable for types.

// In TypeScript, you can declare an array using two syntaxes:

// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

let array1: Array<string> = ["Apple", "Banana", "Mango"];
let array2: Array<number> = [1, 2, 3];
let array3: Array<boolean> = [true, false, true];

// * Generics - Create Generic Function and Interface
function createString(arg: string): string {
  return arg;
}
function createNumber(arg: number): number {
  return arg;
}

// Define a generic function
function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>("Hello World");
const someNumberValue = genericFunction<number>(2);
console.log(someStringValue);
console.log(someNumberValue);

// Define a generic interface
interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: "Hello World",
  getValue() {
    return this.value;
  },
};

// * Generics - Promise Example

// A Promise in JavaScript (and thus TypeScript) is an object representing the eventual completion or failure of an asynchronous operation.

// async function someFunc(): Promise<string> {
//   return "Hello World";
// }

async function someFunc(): Promise<number> {
  return 8080;
}

const promiseResult = someFunc();
console.log(promiseResult);

// * Generics - Generate Array
function generateStringArray(length: number, value: string) {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}
console.log(generateStringArray(10, "hello"));

function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

let arrayStrings = createArray(10, "hello");
let arrayNumbers = createArray(10, 8080);
let arrayBooleans = createArray(10, true);

console.log(arrayStrings);
console.log(arrayNumbers);
console.log(arrayBooleans);

// * Generics -  Multiple Params

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

// Usage
let pairResult = pair<number, string>(123, "hello");

console.log(pairResult); // Output: [123, "Hello"]

// * Generics - Inferred Type and Type Constraints
