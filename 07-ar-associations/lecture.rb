require 'pry'
require './app/models/song.rb'
require './app/models/user.rb'
require './app/models/favorite.rb'
# song = {title:, duration:}
# song = {title:, duration:}
# song = {title:, duration:}
# song = {title:, duration:}



user = User.new("Tashawn", 30)
user1 = User.new("CJ", 29)
user2 = User.new("Tyquan", 21)

song1 = Song.new("Taylor Swift", "Shake it off", 3, "pop")
song2 = Song.new("Drake", "Started from the bottom", 3, "rap")
song3 = Song.new({artist: "Rihanna", title: "Diamonds", duration: 3, genre:"pop"})
song4 = Song.new("Beyonce", "Halo", 3, "r&b")
song5 = Song.new("JCole", "Role Models", 3, "rap")
song6 = Song.new("Missy Elliott","The Rain", 3, "rap")
song7 = Song.new("Lauryn Hill", "Doo Wop (That Thing)", 3, "rap")
song8 = Song.new("Bruno Mars", "Uptown Funk", 3, "pop")
song9 = Song.new("DVSN", "Don't choose", 3, "Rhythm & Blues")
song10 = Song.new("dvsn", "Don't choose", 3, "Rhythm & Blues")

Favorite.new(user, song1)
Favorite.new(user1, song2)
Favorite.new(user2, song3)
Favorite.new(user1, song4)
Favorite.new(user2, song5)
Favorite.new(user, song6)
Favorite.new(user1, song7)
Favorite.new(user2, song8)
Favorite.new(user, song9)
Favorite.new(user1, song10)
Favorite.new(user2, song1)


binding.pry

