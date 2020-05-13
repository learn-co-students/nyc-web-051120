class Song 
    attr_reader :title, :duration, :counter
    attr_accessor :genre, :favorite
    @@all = []

    def initialize(title, duration, genre, favorite=false)
        @title = title
        @duration = duration 
        @genre = genre
        @counter = 0
        @favorite = favorite
        Song.all << self # => self == the instance
    end

    def play
        binding.pry
        # self == instance calling on the method
        increment_counter
         "#{@title} is playing"
    end

    def self.all # self == the class
         @@all
    end

    def self.all_titles 
        # what is our return => array
            # map & select
        # Do I have a condition => No
            # map
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


