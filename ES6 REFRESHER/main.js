//Const and LET
const name = "John"; //can't resign name= 'Jack';
let name = "Peter";
name = "Jack"; // can change.
// // //for initalize using let;
const person = {
  name: "John",
  age: 33
};
person.name = "Jack"; ///we can change values in object and arrays
//arrow functions
function sayHello() {
  console.log("Hello");
} // normal function
const sayHelLo = () => {
  console.log("Hello");
}; /// OR
const sayHelLo = () => console.log("Hello"); //if it only one line we dont need curly brackets

// //if it has one parameter in arrow function we dont need to use brackets
const sayHelLo = names => console.log(`"hello"${name}`);

// //forEach
const fruits = ["Apples", "Oranges", "Grapes"];
fruits.forEach((fruit, indes) => console.log(fruit));
// //map returns array
const singleFruit = fruits.map(fruit => fruit.slice(0, -1));
console.log(singleFruit);
// //using in react for List
// //filter
// //use to return array with filtered out
// //Redux,Context API,state management

const people = [
  { id: 1, name: "Karen" },
  { id: 2, name: "Glen" },
  { id: 3, name: "Mch" }
];

const people2 = people.filter(person => person.id != 2);
console.log(people2);

//spread

//USED A LOT IN REACT

const arr = [1, 2, 3];
const arr2 = [...arr, 4];

const arr3 = [...arr.filter(number => number != 2)];
console.log(arr3);

const person = {
  name: "Jack",
  age: 21
};
const person2 = {
  ...person,
  email: "jack@gmail.com"
};
//Destructring

const profile = {
  name: "John Doe",
  address: {
    street: "60 Seaside",
    city: "Eastbourne"
  },
  hobbies: ["movies", "musci"]
};
const { name, address, hobbies } = profile;
const { street, city } = profile.address;
console.log(name, street, city, hobbies[0]);
// //example in React
this.state.profile;
this.props.name;
// //classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello my name is ${this.name} and my age is ${this.age}`;
  }
}
const person1 = new Person("Jogn", 28);
console.log(person1.greet());

// //subclasses
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age); //takes from  Person class
    this.balance = balance; //make balance accepteble
  }
  info() {
    return `${this.name} owes $${this.balance}`;
  }
}
const customer1 = new Customer("Kevin", 32, 300);
console.log(customer1.info());
//Modules
file1(file1.js);
export const name = "Jeff";
export default Person;

file2(file2.js);
import { name } from "./file1"; //if it is in same folder
import Person from "./file1";
