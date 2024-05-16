// * Enums

// Enums in TypeScript allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.

enum ServerResponseStatus {
  SUCCESS = 200,
  ERROR = "Error",
  // Success,
  // error
}

console.log(ServerResponseStatus);

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.SUCCESS,
    data: ["1", "2", "3"],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);

// Enums - Gotcha : Reverse Mapping

// In a numeric enum, TypeScript creates a reverse mapping from the numeric values to the enum member names. This means that if you assign a numeric value to an enum member, you can use that numeric value anywhere the enum type is expected.
enum ServerResponseStatusNumber {
  Success = 200,
  Error = 500,
}
console.log(ServerResponseStatusNumber);

Object.values(ServerResponseStatusNumber).forEach((value) => {
  if (typeof value === "number") {
    console.log(value);
  }
});

// In a string enum, TypeScript does not create a reverse mapping. This means that if you assign a string value to an enum member, you cannot use that string value anywhere the enum type is expected. You must use the enum member itself.

enum ServerResponseStatusString {
  Success = "Success",
  Error = "Error",
}
console.log(ServerResponseStatusString);

Object.values(ServerResponseStatusString).forEach((value) => {
  console.log(value);
});
