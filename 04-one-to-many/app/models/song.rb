class Song 
    attr_reader :title, :duration, :counter
    attr_accessor :genre, :favorite, :user
    @@all = []

    def initialize(user, title, duration, genre, favorite=false)
        @user = user
        @title = title
        @duration = duration 
        @genre = genre
        @counter = 0
        @favorite = favorite
        Song.all << self
    end


    def self.find_songs_by_genre(genre)
        self.all.select do |s|
            s.genre == genre
        end
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


