console.log("this is so much fun!")

/************ Function called on an Object ***************/

// `this` references the object executing the current function




/************ Simple Function Call ***********************/
// in a simple function call, `this` will be the window object



/************ Bind/Call/Apply ****************************/
// thisArg is an object we want to be used as the `this` object in a given context



/************ Function Called with New Keyword ***********/
// save for tomorrow


/************ Arrow Functions ****************************/

// arrow functions DO NOT get their own `this`, they get it from the parent context
// cannot use `call`, `apply`, or `bind` with arrow function
































// let perky = {
//   name: "Perky",
//   whatIsThis: this,
//   traditionalThis: function() { return this },
//   arrowThis: () => this
// }