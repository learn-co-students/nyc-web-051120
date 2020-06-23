console.log("Welcome to Mod 3")

/*
 **Questions


 **Why JS?

  - three pillars

  1. event handling - listening and responding to different types of user input
  2. API requests (fetch) - making HTTP requests using JS
  3. DOM manipulation/traversal - controlling what the user sees on the web page

 
  - Single Page Applications


 **What is JS?

 - ECMAScript


 **How JS?

  - inline script tage
  - load local js files
  - load js files from the internet - CDN


 **Some data types
 - null

  - equivalent to `nil` in Ruby
  - indicates the absence of a value
  - null is falsey
 
 - Number

  - only data type that handles numbers
  - both decimals and integers
  - beware of rounding errors
 
 - String

  - much like ruby
  - "" ==> Ruby "#{variable} something something"
  - ''
  - `` ==> JS `${variable} something something`

 - Object Literals

  - equivalent to Ruby hashes
  - key-value pairs
  - can be accessed using square-bracket notion OR dot notation
  - can hold multiple data types as values - numbers, strings, arrays, other objects etc.
 
 - Array

  - pretty much the same as Ruby
  - can hold multiple data types
  - 0-indexed
  - fewer built in methods than Ruby

 - undefined

  - represents the presence of something that hasn't yet been defined

 **Functions

  def say_hi(name)
    puts "Hi there #{name}!"
  end

  say_hi("steven") => "Hi there steven!"

*/

// function declaration, named function

function sayHi(name){
  console.log(`Hey there ${name}!`)
}


// function expression

let sayHello = function(name){
  console.log(`Hello there ${name}!!`)
}

let sayHowdy = function(){
  console.log("HOWDY!!!")
}