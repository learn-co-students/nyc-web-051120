console.log("oojs")

class Person {
  constructor(name, age){
    this.name = name
    this.age = age
  }

  greeting(){
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
  }

  static woohoo(){
    console.log(`We're the best!!`)
  }
}

class Student extends Person{
  constructor(name, age, grade){
    super(name, age)
    this.grade = grade
  }
}

const pierre = new Person('Pierre', 15)
const bonnie = new Student("Bonnie", 26, 12)
pierre.greeting()
















































// class Person {
//   constructor(age, name, interests){
//     this.age = age
//     this.name = name
//     this.interests = interests
//   }

//   bio(){
//     return `${this.name} is ${this.age} years old and enjoys ${this.interests.join(', ')}`
//   }
// }

// class Student extends Person {
//   constructor(age, name, interests, grade){
//     super(age, name, interests)
//     this.grade = grade
//   }
// }

// let steven = new Person(21, "Steven", ["knitting", "eating", "sleeping"])

// let michael = new Student(22, "Michael", ["HP", "Simpsons"], 30)