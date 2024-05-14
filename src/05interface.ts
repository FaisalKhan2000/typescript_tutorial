// * Interface - Fundamentals

// - allow to setup shape for objects (only objects)

// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
// }

// const deepWork: Book = {
//   isbn: 9781455586691,
//   title: "Deep Work",
//   author: "Cal Newport",
//   // genre: "Self-help",
// };

// deepWork.title = "New Title"; // allowed
// // deepWork.isbn = 654321; // not allowed

// deepWork;

// * Interface - Methods

// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
//   // method
//   printAuthor(): void;
//   printTitle(message: string): string;
// }

// const deepWork2: Book = {
//   isbn: 9781455586691,
//   title: "Deep Work",
//   author: "Cal Newport",
//   // genre: "Self-help",
//   printAuthor() {
//     console.log(this.author);
//   },
//   printTitle(message) {
//     return `${this.title} ${message}`;
//   },
// };

// deepWork2.printAuthor();
// console.log(deepWork2.printTitle("is a good book."));

// * Interface - Methods (more options)

// It's generally a good practice to match the structure of the interface and the implementing object or class as closely as possible. This makes the code easier to understand and maintain. So, if printAuthor is defined as a method in the Book interface, it would be more consistent to implement it as a method in the deepWork object.

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;

  // method as a property
  printSomething: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  // printAuthor() {
  //   console.log(this.author);
  // },
  printTitle(message) {
    return `${this.title} ${message}`;
  },

  // first option
  printSomething: function (someValue) {
    return someValue;
  },

  // // second option
  // printSomething: (someValue) => {
  //   // console.log(this)
  //   console.log(deepWork.author);

  //   return someValue;
  // },

  // // third option
  // printSomething(someValue) {
  //   return someValue;
  // },

  printAuthor: () => {
    console.log(deepWork.author);
  },
};

console.log(deepWork.printSomething(69));
deepWork.printAuthor();

// ## Challenge

// - Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.

// - Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.

// - Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.

// - Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.

// - Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.

interface Computer {
  readonly id: number; // cannot be changed once initialized
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number; // optional property
}

// - Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.

// - Finally, we can use our object. We can call its upgradeRam method to increase its RAM.

const myLaptopSpecs: Computer = {
  id: 1,
  brand: "apple",
  ram: 8, // in GB
  upgradeRam(amount: number) {
    this.ram += amount;
    return this.ram;
  },
  // storage: 256,
};

myLaptopSpecs.storage = 256;
console.log(myLaptopSpecs);
console.log(myLaptopSpecs.upgradeRam(8));
