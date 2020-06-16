# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "...Destroying Signs"
Sign.destroy_all

puts "...Creating Sings"
Sign.create({name: "Pisces", date: "Feb 19 - Mar 20", element: "Water", img_url: ""})
Sign.create({name: "Aries", date: "March 21 - April 19", element: "Fire", img_url: ""})
Sign.create({name: "Taurus", date: "April 20 - May 20", element: "Earth", img_url: ""})
Sign.create({name: "Cancer", date: "June 21 - July 22", element: "Water", img_url: ""})
Sign.create({name: "Leo", date: "July 23 - August 22", element: "Fire", img_url: ""})


puts "...Creating Users"

User.create(name: "Greg", age: 11, sign_id: Sign.all.sample.id)




puts "DONE!!!"