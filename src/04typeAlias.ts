// Type Alias

// A type alias in TypeScript is a new name or shorthand for an existing type, making it easier to reuse complex types. However, it's important to note that it doesn't create a new unique type - it's just an alias.All the same rules apply to the aliased type, including the ability to mark properties as optional or readonly.

// 1
export type User = { id: number; name: string; isActive: boolean };

// * without using type alias

// const john: { id: number; name: string; isActive: boolean } = {
//   id: 1,
//   name: "john",
//   isActive: true,
// };
// const susan: { id: number; name: string; isActive: boolean } = {
//   id: 1,
//   name: "susan",
//   isActive: false,
// };

// function createUser(user: { id: number; name: string; isActive: boolean }): {
//   id: number;
//   name: string;
//   isActive: boolean;
// } {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`);

//   return user;
// }

// * using type alias
const john: User = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

// 2
type StringOrNumber = string | number;

let value: StringOrNumber;
value = "hello";
value = 69;
console.log(value);

// 3
type Theme = "light" | "dark";

let theme: Theme;
theme = "dark";
theme = "light";

function setTheme(t: Theme) {
  theme = t;
}

setTheme("dark");
theme;

// * challenge

// - Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

type Employee = { id: number; name: string; department: string };

// - Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

type Manager = { id: number; name: string; employees: Employee[] };

// - Create a Union Type: Define a type Staff that is a union of Employee and Manager.

type Staff = Employee | Manager;

// - Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.

function printStaffDetails(staff: Staff): string | undefined {
  if ("employees" in staff) {
    // console.log(
    //   `${staff.name} is a manager of ${staff.employees.length} employees.`
    // );

    return `${staff.name} is a manager of ${staff.employees.length} employees.`;
  } else {
    // console.log(`${staff.name} is a manager of ${staff.department} employees.`);

    return `${staff.name} is an employee in the ${staff.department} department.`;
  }
}

// - Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.

const alice: Employee = {
  id: 1,
  name: "Alice",
  department: "sales",
};

const steve: Employee = {
  id: 2,
  name: "Steve",
  department: "marketing",
};

const bob: Manager = {
  id: 2,
  name: "Bob",
  employees: [alice, steve],
};

// - Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.

console.log(printStaffDetails(alice));
console.log(printStaffDetails(steve));
console.log(printStaffDetails(bob));

// * Intersection Types

// In TypeScript, an intersection type (TypeA & TypeB) is a way of combining multiple types into one. This means that an object of an intersection type will have all the properties of TypeA and all the properties of TypeB. It's a way of creating a new type that merges the properties of existing types.

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = {
  id: 1,
  name: "kite runner",
  price: 10,
};

const book2: Book = {
  id: 2,
  name: "peer e kamil",
  price: 99,
};

const book3: DiscountedBook = {
  id: 3,
  name: "harry potter",
  price: 69,
  discount: 0.15,
};

// * Type Alias - Computed Properties

// Computed properties in JavaScript are a feature that allows you to dynamically create property keys on objects. This is done by wrapping an expression in square brackets [] that computes the property name when creating an object.

const propName = "age";

type Animal = {
  [propName]: number;
};

let tiger: Animal = {
  [propName]: 5,
};

tiger;
