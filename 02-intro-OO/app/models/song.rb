class Song 
    attr_reader :title, :duration
    # attr_writer :genre
    attr_accessor :genre
    def initialize(title, duration, genre)
        @title = title
        @duration = duration 
        @genre = genre
    end

    # def title
    #     @title
    # end
    # def duration 
    #     @duration
    # end
    # def genre 
    #     @genre
    # end
    # def genre=(genre)
    #     @genre = genre
    # end

end


