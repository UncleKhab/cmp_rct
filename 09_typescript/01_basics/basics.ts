// Primitives : number, string, boolean
// Complex: arrays, objects
// Function Types, params

// Primitives

let age: number;
let userName: string;
let isInstructor: boolean;

// More complex types

// Arrays
let hobbies: string[];
let grades: number[];
let works: boolean[];
hobbies = ["one", "two"];

// Objects

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Steve",
  age: 20,
};

let people: Person[];

// Type inference

let course: string = "React - The Complete Guide";

// Union Types

let notone: string | number = "something";
notone = 12;

// Functions  & types

function add(a: number, b: number): number | string {
  return a + b;
}

function print(value: any): void {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const numArray = [1, 2, 3];
const strArray = ["a", "b", "c"];
const mixArray = [1, "a", 2];

const numberArray = insertAtBeginning(numArray, -1);
const stringArray = insertAtBeginning(strArray, "a");
const mixedArray = insertAtBeginning(mixArray, "a");
