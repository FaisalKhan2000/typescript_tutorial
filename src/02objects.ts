// Object with specified properties
let car: { brand: string; year: number } = {
  brand: "Toyota",
  year: 2024,
};

car.brand = "Ford"; // Modifying existing property is allowed
// car.color = "red"; // Error: 'color' does not exist on type '{ brand: string; year: number; }'

console.log(car);

// Array of objects with readonly and optional properties
let book = { title: "Book", cost: 20 };
let pen = { title: "Pen", cost: 20 };
let notebook = { title: "Notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// items[0].title = "Books"; // Error: Cannot assign to 'title' because it is a read-only property

console.log(items);

// Object with specified properties and types
let bike: { brand: string; year: number } = { brand: "Yamaha", year: 2020 };
// bike.year = "old"; // Error: Type '"old"' is not assignable to type 'number'

let laptop: { brand: string; year: number } = { brand: "Dell", year: 2022 };
let laptop1: { brand: string; year?: number } = { brand: "Hp" };

// Array of objects with optional properties
let product1 = { title: "Shirt", price: 100 };
let product2 = { title: "Pant", price: 100 };
let product3 = { title: "Watch" };

let products: { title: string; price?: number }[] = [
  product1,
  product2,
  product3,
];

products.push({ title: "Socks", price: 100 });

console.log(products);
