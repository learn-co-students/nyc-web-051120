User.delete_all
Song.delete_all
Play.delete_all
Artist.delete_all 
Feature.delete_all

user = User.create(name: "Sean")
user1 = User.create(name: "Yoan")
user2 = User.create(name: "Greg")

artist1 = Artist.create(name: "Rihanna", billboard?: true)
artist2 = Artist.create(name: "Taylor Swift", billboard?: true)
artist3 = Artist.create(name: "Drake", billboard?: true)
artist4 = Artist.create(name: "Beyonce", billboard?: true)
artist5 = Artist.create(name: "J Cole", billboard?: true)

song1 = Song.create(title:"Shake it off", duration:3)
song2 = Song.create(title: "Started from the bottom", duration: 3)
song3 = Song.create(title: "Diamonds", duration: 3)
song4 = Song.create(title: "Halo", duration: 3)
song5 = Song.create(title: "Role Models", duration:3)

Feature.create(artist:artist1, song:song3)
Feature.create(artist:artist5, song:song3)

play1 = Play.create(user: user, song: song1)
play2 = Play.create(user: user1, song: song2)
play3 = Play.create(user: user2, song: song3)
play4 = Play.create(user: user, song: song4)
play5 = Play.create(user: user1, song: song5)
play6 = Play.create(user: user2, song: song1)



















# song5 = Song.new("JCole", "Role Models", 3, "rap")
# song4 = Song.new("Beyonce", "Halo", 3, "r&b")
# song3 = Song.new(artist: "Rihanna", title: "Diamonds", duration: 3, genre:"pop")
# song1 = Song.new(artist:"Taylor Swift", title:"Shake it off", duration:3, genre:"pop")
# song2 = Song.new("Drake", "Started from the bottom", 3, "rap")


# song6 = Song.new("Missy Elliott","The Rain", 3, "rap")
# song7 = Song.new("Lauryn Hill", "Doo Wop (That Thing)", 3, "rap")
# song8 = Song.new("Bruno Mars", "Uptown Funk", 3, "pop")
# song9 = Song.new("DVSN", "Don't choose", 3, "Rhythm & Blues")
