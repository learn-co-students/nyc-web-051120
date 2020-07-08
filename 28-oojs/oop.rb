require 'pry'

class Person
  attr_accessor :name, :age
  
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  def greeting
    "Hi, my name is #{@name} and I am #{age} years old."
  end

  def self.woohoo
    "#{self.name} is the best!"
  end
end

class Student < Person
  attr_accessor :grade

  def initialize(name, age, grade)
    super(name, age)
    @grade = grade
  end

  def bio
    "#{@name} was in grade #{@grade} and they were #{age} years old. Weird, right?"
  end
end

ramona = Person.new("Ramona", 20)
madison = Student.new("Madison", 25, 11)

binding.pry
puts 'okthxbye' 