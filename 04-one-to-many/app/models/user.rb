class User
    attr_accessor :name, :age, :songs
    @@all = []
    def initialize(name, age)
        @name = name 
        @age = age
        User.all << self
    end

    def self.all 
        @@all
    end

    def songs 
        # Ask my Song class for all the songs
        # Select only the songs that are associated with this user
        Song.all.select do |song_instance|
            song_instance.user == self
        end
    end

    def find_song_by_genre(genre)
        songs.select do |s|
            s.genre == genre
        end
    end

    def search_songs(title)
        self.songs.find do |song|
            song.title == title
        end
    end

    def play_song(song_instance)
        song_instance.play
    end
    # def favorite_song(song_instance)
    #     song_instance.favorite = true
    # end
    def toggle_favorite_song(song_instance)
        if song_instance.favorite 
            song_instance.favorite = false
        else
            song_instance.favorite = true
        end
    end

    def create_song(title, duration, genre, favorite=false)
        Song.new(self, title, duration, genre, favorite)
    end

    def favorite_songs
        self.songs.select do |song|
            song.favorite == true
        end
    end

    def delete_song(song)
        Song.new(self, title, duration, genre, favorite)
    end

end