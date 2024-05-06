function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}

sayHi("faisal");

function calculateDiscount(price: number): number {
  let hasDiscount = true;
  // if (hasDiscount) return "discount applied";
  return price * 0.9;
}

let discountedPrice = calculateDiscount(2000);
console.log(discountedPrice);

// challenge 1
let namesArray: string[] = ["Alice", "Bob", "Charlie", "David", "Eva"];

function checkNames(name: string): boolean {
  return namesArray.includes(name);
}

console.log(checkNames("Bob"));

// optional param
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

console.log(calculatePrice(200)); // Output: 200
console.log(calculatePrice(200, 10)); // Output: 190

// default param
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(300, 10);
console.log(scoreAfterPenalty);
let scoreBeforePenalty = calculateScore(300);
console.log(scoreBeforePenalty);

function sum(message: string, ...numbers: number[]): string {
  let total = numbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  return `${message} ${total}`;
}

let result = sum("The total is: ", 1, 2, 3, 4, 5);
console.log(result);

// void
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello, Typescript");

// challenge 2

function processInput(input: string | number) {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input * 2;
}

console.log(processInput(2));
console.log(processInput("hello, typescript"));

// taking object as input

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return {
    id,
    isActive: id % 2 === 0,
  };
}

console.log(createEmployee({ id: 1 }));
console.log(createEmployee({ id: 2 }));

// alterative
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

createStudent({ id: 1, name: "faisal" });
createStudent({ id: 1, name: "nasim" });

// challenge 3
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

console.log(processData(10));
console.log(processData("Hello"));
console.log(processData("Hello", { reverse: true }));
