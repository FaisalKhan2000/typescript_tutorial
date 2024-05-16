// ## Interface vs Type Alias

// A type alias is a way to give a name to a type. It can represent primitive types, union types, intersection types, tuples, and any other types. Once defined, the alias can be used anywhere in place of the actual type.

type Person1 = {
  id: number;
  name: string;
  age: number;
};

const faisal: Person1 = {
  id: 1,
  name: "faisal khan",
  age: 24,
};

// Interface

// An interface is a way to define a contract for a certain structure of an object.

interface Person2 {
  id: number;
  name: string;
  age: number;
}

const nasim: Person2 = {
  id: 2,
  name: "nasim khan",
  age: 22,
};

// Key Differences

// - Type aliases can represent primitive types, union types, intersection types, tuples, etc., while interfaces are primarily used to represent the shape of an object.

// Type alias for a primitive type
type Score = number;
type NumberOrString = number | string;
// Type alias for literal types
type Direction = "up" | "down" | "left" | "right";

// Using the type aliases
const gameScore: Score = 23;
let move: Direction = "down";

// - Interfaces can be merged using declaration merging. If you define an interface with the same name more than once, TypeScript will merge their definitions. Type aliases can't be merged in this way.

// - Interfaces can be implemented by classes, while type aliases cannot.
// - Type aliases can use computed properties, while interfaces cannot.

interface Person {
  name: string;
  greet(): void;
}

class Employee implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let emp1 = new Employee("faisal");
emp1.greet();
