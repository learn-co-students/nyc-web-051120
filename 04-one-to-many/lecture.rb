require 'pry'
require './app/models/song.rb'
require './app/models/user.rb'
# song = {title:, duration:}
# song = {title:, duration:}
# song = {title:, duration:}
# song = {title:, duration:}



user = User.new("Tashawn", 30)
user1 = User.new("CJ", 29)
user2 = User.new("Tyquan", 21)
song1 = Song.new(user, "Shake it off", 3, "pop", true)
song2 = Song.new(user2, "Started from the bottom", 3, "rap")


user1.add_song(song2)





binding.pry

