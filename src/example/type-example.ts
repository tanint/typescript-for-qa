// Alias Type: defining a custom type using type alias
type ID = string | number;

let userId: ID = "abc123";
let postId: ID = 456;

// Interface: defining a structure for an object
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// Generic: creating a generic function
function identity<T>(arg: T): T {
  return arg;
}

let result1 = identity<number>(42); // Type inference could infer <number>
let result2 = identity<string>("hello"); // Type inference could infer <string>
