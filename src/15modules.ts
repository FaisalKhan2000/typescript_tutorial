import newStudent, { sayHello, person, type Student } from "./actions";

sayHello("TypeScript");
console.log(person);
console.log(newStudent);

const anotherStudent: Student = {
  name: "nasim",
  age: 22,
};

console.log(anotherStudent);
