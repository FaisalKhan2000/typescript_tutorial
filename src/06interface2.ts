// // Interface - Merging, Extend, TypeGuard

// interface Person {
//   name: string;
//   getDetails(): string;
// }

// interface DogOwner {
//   dogName: string;
//   getDogDetails(): string;
// }

// // Merging (reopening) an interface in TypeScript is a process where you declare an interface with the same name more than once, and TypeScript will merge their members.

// interface Person {
//   age: number;
// }

// const person: Person = {
//   name: "faisal",
//   age: 24,
//   getDetails: function () {
//     return `My name is ${this.name}, and I am ${this.age} years old`;
//   },
// };

// person;
// console.log(person.getDetails());

// // * Extending the interface

// // Extending an interface in TypeScript is a way to create a new interface that inherits the properties and methods of an existing interface. You use the extends keyword to do this. When you extend an interface, the new interface will have all the members of the base interface, plus any new members that you add.

// // interface Employee extends Person {
// //   employeeId: number;
// // }

// // const employee: Employee = {
// //   name: "jane",
// //   age: 28,
// //   employeeId: 123,
// //   getDetails() {
// //     return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
// //   },
// // };

// // Interface multiple inheritance
// interface Manager extends Person, DogOwner {
//   managePeople(): void;
// }

// // const manager: Manager = {
// //   name: "Bob",
// //   age: 35,
// //   dogName: "Rex",
// //   getDetails() {
// //     return `Name: ${this.name}, Age: ${this.age}`;
// //   },
// //   getDogDetails() {
// //     return `Dog Name: ${this.dogName}`;
// //   },
// //   managePeople() {
// //     console.log("Managing people...");
// //   },
// // };
