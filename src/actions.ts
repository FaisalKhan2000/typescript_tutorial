export function sayHello(name: string): void {
  console.log(`Hello ${name}!`);
}

export let person = "susan";

export type Student = {
  name: string;
  age: number;
};

const newStudent: Student = {
  name: "faisal",
  age: 24,
};

export default newStudent;
