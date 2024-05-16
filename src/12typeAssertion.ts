// Type Assertion

// Type assertion in TypeScript is a way to tell the compiler what the type of an existing variable is. This is especially useful when you know more about the type of a variable than TypeScript does.

let somevalue: any = "This is a string";

// Using type assertion to treat 'someValue' as a string
let strLength: number = (somevalue as string).length;
console.log(strLength);

type Bird = {
  name: string;
};

// Assume we have a JSON string from an API or local file
let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

// Parse the JSON string into an object
let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

// We're sure that the jsonObject is actually a Bird
let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name); // Eagle
console.log(dog.name); // undefined

enum Status {
  Pending = "pending",
  Declined = "declined",
}

type User2 = {
  name: string;
  status: Status;
};
// save Status.Pending in the DB as a string
// retrieve string from the DB
const statusValue = "pending";

const user2: User2 = { name: "faisal", status: statusValue as Status };
