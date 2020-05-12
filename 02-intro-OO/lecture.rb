require 'pry'
require './app/models/song.rb'
# song = {title:, duration:}
# song = {title:, duration:}
# song = {title:, duration:}
# song = {title:, duration:}



song1 = Song.new("Shake it off", 3, "pop")
song2 = Song.new("Started from the bottom", 3, "rap")
    # - The .new method immediately invokes the initialize instance method if one exists
# Song.new


binding.pry

