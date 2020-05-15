class User
    attr_accessor :name, :age
    @@all = []
    def initialize(name, age)
        @name = name 
        @age = age
        User.all << self
    end

    def self.all 
        @@all
    end

    def favorites 
        Favorite.all.select do |fav|
            fav.user == self
        end
    end

    def songs 
        favorites.map do |fav|
            fav.song
        end.uniq
    end

    def add_favorite(song)
        Favorite.new(self, song)
    end

    def remove_favorite(song)
        fav_to_remove = self.favorites.find do |fav|
                            fav.song == song
                        end
        Favorite.all.delete(fav_to_remove)
    end

    def songs_by_genre(genre)
        # Ask my Song class for all the songs
        # Select only the songs that are associated with this user
       songs.select do |song|
            song.genre == genre
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

    def create_song(title, duration, genre)
        Song.new(title, duration, genre)
    end


end



