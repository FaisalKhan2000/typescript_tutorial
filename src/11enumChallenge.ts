// Challenge

// - Define an enum named UserRole with members Admin, Manager, and Employee.
// - Define a type alias named User with properties id (number), name (string), role (UserRole), and contact (a tuple with two elements: email as string and phone as string).
// - Define a function named createUser that takes a User object as its parameter and returns a User object.
// - Call the createUser function with an object that matches the User type, store the result in a variable, and log the variable to the console.

enum UserRole {
  ADMIN = "admin",
  MANAGER = "manager",
  EMPLOYEE = "employee",
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [email: string, phone: string];
};

function createUser(user: User): User {
  return user;
}

const user1: User = createUser({
  id: 1,
  name: "faisal khan",
  role: UserRole.ADMIN,
  contact: ["faisal@gmail.com", "+91 666666"],
});

console.log(user1);
