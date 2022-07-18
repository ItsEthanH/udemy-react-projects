// Primitives: number, string, boolean
let age: number = 24;
age = 12;

let userName: string;
userName = 'Ethan';

let isAuthenticated: boolean = false;
isAuthenticated = true;

let course: string | number = 'Introduction to Javascript';
course = 221011; // Example: course name and id allowed

// Complex: arrays, objects
let hobbies: string[];
hobbies = ['Sports', 'Music', 'Coding'];

type Person = { name: string; age: number };
let person: Person;
person = {
  name: 'Ethan',
  age: 21,
};

let people: Person[];

// Function types & parameters
function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics - write type-safe, yet flexible, functions
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
