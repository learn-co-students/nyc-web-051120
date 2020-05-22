
User.delete_all
Song.delete_all

user = User.create(name:"Tashawn")
user1 = User.create(name:"CJ")
user2 = User.create(name:"Tyquan")



# song1 = Song.new({"Taylor Swift", "Shake it off", 3, "pop"})
# song2 = Song.new("Drake", "Started from the bottom", 3, "rap")
song3 = Song.create(title: "Diamonds", duration: 3, user: user)
# song4 = Song.new("Beyonce", "Halo", 3, "r&b")
# song5 = Song.new("JCole", "Role Models", 3, "rap")
# song6 = Song.new("Missy Elliott","The Rain", 3, "rap")
# song7 = Song.new("Lauryn Hill", "Doo Wop (That Thing)", 3, "rap")
# song8 = Song.new("Bruno Mars", "Uptown Funk", 3, "pop")
# song9 = Song.new("DVSN", "Don't choose", 3, "Rhythm & Blues")
# song10 = Song.new("dvsn", "Don't choose", 3, "Rhythm & Blues")


    