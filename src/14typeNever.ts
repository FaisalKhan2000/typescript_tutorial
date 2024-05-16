// Type - "never"

// In TypeScript, never is a type that represents the type of values that never occur.you can't assign any value to a variable of type never.
// TypeScript will give a compile error if there are any unhandled cases, helping ensure that all cases are handled.

// let someValue: never = 0;

type Theme = "light" | "dark";

function checkTheme(theme: Theme) {
  if (theme === "light") {
    console.log("light theme");
    return;
  }
  if (theme === "dark") {
    console.log("dark theme");
    return;
  }
  theme;
  // theme is of type never, because it can never have a value that is not 'light' or 'dark'.
}

enum Color {
  Red,
  Blue,
  // Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return "Red";
    case Color.Blue:
      return "Blue";
    default:
      // at build time
      let unexpectedColor: never = color;
      // at runtime
      throw new Error(`Unexpected color value: ${unexpectedColor}`);
  }
}

console.log(getColorName(Color.Red)); // Red
console.log(getColorName(Color.Blue)); // Blue
// console.log(getColorName(Color.Green)); // Green
