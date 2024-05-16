// ## Challenge - Part 1

// - Define the Person interface Start by defining a Person interface with a name property of type string.

interface Person {
  name: string;
}

// - Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.

interface DogOwner extends Person {
  dogName: string;
}

// - Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.

interface Manager extends Person, DogOwner {
  managePeople(): void;
  delegateTasks(): void;
}

// - Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.

function getEmployee(): Person | DogOwner | Manager {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: "john",
    };
  } else if (random < 0.66) {
    return {
      name: "sarah",
      dogName: "Rex",
    };
  } else {
    return {
      name: "bob",
      managePeople: () => console.log("Managing people..."),
      delegateTasks: () => console.log("Delegating tasks..."),
    };
  }
}
// - Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.

const employee: Person | DogOwner | Manager = getEmployee();
console.log(employee);

// ## Challenge - Part 2

// A type predicate in TypeScript is a special kind of return type for a function that not only returns a boolean, but also asserts that the argument is of a specific type if the function returns true. It's typically used in user-defined type guard functions to narrow down the type of a variable within a certain scope. The syntax is arg is Type, where arg is the function argument and Type is the type you're checking for.

// - Define the isManager function Define a function called isManager that takes an object of type Person | DogOwner | Manager and returns a boolean. This function should check if the managePeople method exists on the object, and return true if it does and false if it doesn't. The return type of this function should be a type predicate: obj is Manager.
// - Run your code to see if it works as expected. If employee is a Manager, you should see the output of the delegateTasks method in the console. If employee is a Person or DogOwner, there should be no output.

// * WITHOUT TYPE PREDICATE
// function isManager(obj: Person | DogOwner | Manager): boolean {
//   return "managePeople" in obj;
// }

// * WITH TYPE PREDICATE

// type predicate in TypeScript is a special kind of return type for a function that not only returns a boolean

// obj is Manager IS A TYPE PREDICATE WHICH ONLY RETURNS BOOLEAN

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  return "managePeople" in obj;
}

if (isManager(employee)) {
  employee.delegateTasks();
}
