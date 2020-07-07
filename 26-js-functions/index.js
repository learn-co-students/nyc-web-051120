/*

* scope

1. Global Scope
2. Function Scope
3. Block Scope

* hoisting


* first class functions

*/

// 1. Global Scope

let name = "Steven"

const sayName = () => {
  console.log(name)
}

// console.log(name)

// 2. Function Scope

const sayNameAgain = () => {
  const otherName = "Edward"
  console.log(otherName)

  function thing(){
    console.log("inside function", otherName)
  }

  thing()
}

// console.log(otherName)

// 3. Block Scope

if(true){
  let lastName = "Doran"
  // console.log(lastName)
}


// console.log(lastName)

// HOISTING
// variables declare with the `var` keyword are "hoisted" to the top of whatever scope they are in

// console.log(dog)

var dog = "Perky"

// console.log(dog)

// functions declared with the `function` keyword are also hoisted

// bark()

function bark(){
  console.log('woof woof')
}

// var VS let VS const

// var lets you redeclare and redfine variables
// var variables are hoisted
var city = "NYC"
var city = "LA"
city = "Chicago"

// let does not allow you to redeclare a variable
// it does allow you to redefine it
let country = "USA"
country = "Canada"

// const does not allow you to redeclare a variable
// const does not allow you to redefine a variable
const food = "hamburger"

const person = {
  name: "Steven",
  location: "LIC"
}
person.eyeColor = "brown" // <== valid, you can mutate the properties of an object or the items in an array declared with const


// FIRST CLASS FUNCTIONS

/* 
languages are said to treat functions as first class citizens 
when they treat functions like other objects, meaning they can be
assigned to variables, they can be passed around as arguments,
or they can be assigned as properties inside objects.
*/

person.sayHi = () => {
  console.log("Hi there")
}

person.sayHi()

const sayHello = person.sayHi

// CALLBACK 
// passing a function in as an argument to another function
// create my own implementation of the map function

// map iterates over the items in a collections, applies some logic to each item, and then returns a new array with the output of the previous item logic

const myMap = (array, callback) => {
  const newArray = []

  array.forEach(item => {
    const newItem = callback(item)
    newArray.push(newItem)
  })

  return newArray
}

// const doubler = num => {
//   return num * 2
// }


// HIGHER ORDER FUNCTIONS
// functions that return other functions

function smusher(str1){
  return function(str2){
    return str1 + str2
  }
}

// CLOSURES
// a closure is when a function is able to remember and access its
// scope even when that function is executing outside of its original scope
// a function with a backpack, a function with baggage

function multiplier(x){
  return function(y){
    return x * y
  }
}



