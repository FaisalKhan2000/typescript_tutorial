// * Type Guarding

// Type guarding is a term in TypeScript that refers to the ability to narrow down the type of an object within a certain scope. This is usually done using conditional statements that check the type of an object.

// In the context of TypeScript, a type guard is some expression that performs a runtime check that guarantees the type in some scope.

// * Challenge - "typeof" guard
type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

// - Define the function checkValue that takes one parameter value of type ValueType.
// - Inside the function, use an if statement to check if value is of type string. If it is, log value converted to lowercase and then return from the function.
// - If value is not a string, use another if statement to check if value is of type number. If it is, log value formatted to two decimal places and then return from the function.
// - If value is neither a string nor a number, it must be a boolean. Log the string "boolean: " followed by the boolean value.
// - Finally, call the checkValue function with value as the argument.

function checkValue(value: ValueType) {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
    return;
  }

  if (typeof value === "number") {
    console.log(value.toFixed(2));
    return;
  }

  console.log(`boolean: ${value}`);
}

checkValue(value);

// * Challenge - Equality Narrowing

// In TypeScript, equality narrowing is a form of type narrowing that occurs when you use equality checks like === or !== in your code

type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal = Dog | Cat;

// - Define a function named makeSound that takes one parameter animal of type Animal.
// - Inside the function, use an if statement to check if animal.type is 'dog'.
// - If animal.type is 'dog', TypeScript knows that animal is a Dog in this block. In this case, call the bark method of animal.
// - If animal.type is not 'dog', TypeScript knows that animal is a Cat in the else block. In this case, call the meow method of animal.
// - Now you can call the makeSound function with an Animal as the argument. The function will call the appropriate method (bark or meow) depending on the type of the animal.

function makeSound(animal: Animal) {
  if (animal.type === "dog") {
    animal.bark();
  } else {
    animal.meow();
  }
}

// Now you can call the function with an Animal
const myDog: Dog = {
  type: "dog",
  name: "Buddy",
  bark: () => console.log("Woof!"),
};
const myCat: Cat = {
  type: "cat",
  name: "Whiskers",
  meow: () => console.log("Meow!"),
};

makeSound(myDog); // This will call the bark method
makeSound(myCat); // This will call the meow method

// * Challenge - check for property

// The "in" operator in TypeScript is used to narrow down the type of a variable when used in a conditional statement.It checks if a property or method exists on an object. If it exists, TypeScript will narrow the type to the one that has this property.

// - Define a function named makeSound that takes one parameter animal of type Animal.
// - Inside the function, use an if statement with the in operator to check if the bark method exists on the animal object.
// - If the bark method exists on animal, TypeScript knows that animal is a Dog in this block. In this case, call the bark method of animal.
// - If the bark method does not exist on animal, TypeScript knows that animal is a Cat in the else block. In this case, call the meow method of animal.
// - Now you can call the makeSound function with an Animal as the argument. The function will call the appropriate method (bark or meow) depending on the type of the animal.
function makeSound2(animal: Animal) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound2(myDog); // This will call the bark method
makeSound2(myCat); // This will call the meow method

// * Challenge - "Truthy"/"Falsy" guard

// In TypeScript, "Truthy"/"Falsy" guard is a simple check for a truthy or falsy value

// - Define a function named printLength that takes one parameter str which can be of type string, null, or undefined.
// - Inside the function, use an if statement to check if str is truthy. In JavaScript and TypeScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).
// - If str is truthy, it means it's a string (since null and undefined are falsy). In this case, log the length of str using the length property of the string.
// - If str is not truthy (i.e., it's either null or undefined), log the string 'No string provided'.

// - Now you can call the printLength function with a string, null, or undefined as the argument. The function will print the length of the string if a string is provided, or 'No string provided' otherwise.

function printLength(str: string | null | undefined) {
  if (str) {
    console.log(str.length);
  } else {
    console.log("No string provided");
  }
}

printLength("Hello"); // Outputs: 5
printLength(null); // Outputs: No string provided
printLength(undefined); // Outputs: No string provided

// * Challenge - "instanceof" type guard

// The instanceof type guard is a way in TypeScript to check the specific class or constructor function of an object at runtime. It returns true if the object is an instance of the class or created by the constructor function, and false otherwise.

try {
  // Some code that may throw an error
  throw new Error("This is an error");
} catch (error) {
  if (error instanceof Error) {
    console.log("Caught an Error object: " + error.message);
  } else {
    console.log("Caught an unknown error");
  }
}

// - Start by defining the function using the function keyword followed by the function name, in this case checkInput.
// - Define the function's parameter. The function takes one parameter, input, which can be of type Date or string. This is denoted by input: Date | string.
// - Inside the function, use an if statement to check if the input is an instance of Date. This is done using the instanceof operator.
// - If the input is an instance of Date, return the year part of the date as a string. This is done by calling the getFullYear method on the input and then converting it to a string using the toString method.
// - If the input is not an instance of Date (which means it must be a string), return the input as it is.
// - After defining the function, you can use it by calling it with either a Date or a string as the argument. The function will return the year part of the date if a Date is passed, or the original string if a string is passed.
// - You can store the return value of the function in a variable and then log it to the console to see the result.

function checkInput(input: Date | string) {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const year = checkInput(new Date());
const randomDate = checkInput("2020-05-05");

console.log(year);
console.log(random);

// * Challenge - Type Predicate

// A type predicate is a function whose return type is a special kind of type that can be used to narrow down types within conditional blocks.

type Studentp = {
  name: string;
  study: () => void;
};

type Userp = {
  name: string;
  login: () => void;
};

type Personp = Studentp | Userp;

const randomPersonp = (): Personp => {
  return Math.random() > 0.5
    ? { name: "john", study: () => console.log("Studying") }
    : { name: "mary", login: () => console.log("Logging in") };
};

const personp = randomPersonp();

// - Define the Person and Student types. Student should have a study method and Person should have a login method.
// - Create a function named isStudent that takes a parameter person of type Person.
// - In the function signature, specify a return type that is a type predicate: person is Student.
// - In the function body, use a type assertion to treat person as a Student, and check if the study - method is not undefined. This will return true if person is a Student, and false otherwise.
// - Use the isStudent function in an if statement with person as the argument.
// - In the if block (where isStudent(person) is true), call the study method on person. TypeScript knows that person is a Student in this block, so this is safe.
// - In the else block (where isStudent(person) is false), call the login method on person. This is safe because if person is not a Student, it must be a Person, and all Person objects have a login method.

function isStudent(person: Personp): person is Studentp {
  return (person as Studentp).study !== undefined;
}

if (isStudent(personp)) {
  personp.study(); // This is safe because TypeScript knows that 'person' is a Student.
} else {
  personp.login();
}

// * Challenge - Discriminated Unions and exhaustive check using the never type

// A discriminated union in TypeScript is a type that can be one of several different types, each identified by a unique literal property (the discriminator), allowing for type-safe handling of each possible variant.

type IncrementAction = {
  type: "increment";
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: "decrement";
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

// - Write a reducer function that takes the current state and an action, and returns the new state. The reducer function should use a switch statement or if-else chain on the type property of the action to handle each action type differently.

// - In the default case of the switch statement or the final else clause, perform an exhaustive check by assigning the action to a variable of type never. If there are any action types that haven't been handled, TypeScript will give a compile error.

// - Implement the logic for each action type in the reducer function. This typically involves returning a new state based on the current state and the properties of the action.

// - Use the reducer function in your application to handle actions and update the state.

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + action.amount;
    case "decrement":
      return state - action.amount;

    default:
      const unexpectedAction: never = action;
      throw new Error(`Unexpected action: ${unexpectedAction}`);
  }
}

const newState = reducer(15, {
  user: "john",
  type: "increment",
  amount: 5,
  timestamp: 123456,
});

console.log(newState);
