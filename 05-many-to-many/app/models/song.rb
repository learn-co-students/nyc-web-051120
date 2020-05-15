class Song 
    attr_reader :title, :duration, :counter, :artist
    attr_accessor :genre, :favorite
    @@all = []

    def initialize(artist, title, duration, genre)
        @title = title
        @artist = artist
        @duration = duration 
        @genre = genre
        @counter = 0
        Song.all << self
    end

    def self.find_songs_by_genre(genre)
        self.all.select do |s|
            s.genre == genre
        end
    end

    def favorites
        Favorite.all.select do |fav|
            fav.song == self
        end
    end

    def users 
        self.favorites.map do |fav|
            fav.user
        end.uniq
    end

    def num_of_users
        self.users.count
    end

    def self.all
        @@all
    end

    def play
        increment_counter
         "#{@title} is playing"
    end

    def self.all
         @@all
    end

    def self.all_titles 
        self.all.map do |song_instance|
            song_instance.title
        end
    end

    def self.most_played
        self.all.max_by do |song|
            song.counter
        end
    end






    private
    
    def increment_counter
        if @counter >= 5
            @counter = @counter + 1
            @favorite = true
        else
            @counter = @counter + 1
        end
    end
end


