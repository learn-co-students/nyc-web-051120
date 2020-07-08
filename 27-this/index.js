console.log("this is so much fun!")

/************ Function called on an Object ***************/

// `this` references the object executing the current function

const dog = {
  name: 'Neikko',
  sayThis: function(){
    console.log("This is: \n", this)
  },
  sayName: function(){
    console.log(`Woof. My name is ${this.name}`)
  }
}

// dog.sayName() // => the executing object is dog

window.name = "Winslow"
const sayThat = dog.sayThis
const sayThatName = dog.sayName

// sayThatName() // => the executing object is the window


/************ Simple Function Call ***********************/
// in a simple function call, `this` will be the window object

function whatIsThis() { return this }
function whatIsTheWindowsName() { return this.name }


/************ Bind/Call/Apply ****************************/
// thisArg is an object we want to be used as the `this` object in a given context

const steven = {
  name: "Steven"
}

function sayNameLocationTime(location, time){
  console.log(`Hi, my name is ${this.name}. I'm in ${location} and it is ${time}.`)
}

// these will immediately invoke the function with the thisArg and the parameters that you pass in
// sayNameLocationTime.call(steven, "LIC", "2:51")
// sayNameLocationTime.apply(steven, ["LIC", "2:52"])

sayNameLocationTime.bind(steven, "LIC", "3:05")

/************ Function Called with New Keyword ***********/
// save for tomorrow


/************ Arrow Functions ****************************/

// arrow functions DO NOT get their own `this`, they get it from the parent context
// cannot use `call`, `apply`, or `bind` with arrow function
// arrow functions are great candidates to be used inside objects if you need to reference the calling object
// the behavior of arrow functions with regard to this is more predictable


let otherDog = {
  name: "Perky",
  whatIsThis: this,
  sayMyName: function(){ console.log(`My name is ${this.name}`)},
  sayMyNameArrow: () => { console.log(`My name is ${this.name}`)},
  traditionalThis: function() { console.log('Traditional this: \n', this) },
  arrowThis: () => console.log('Arrow this: \n', this)
}





























