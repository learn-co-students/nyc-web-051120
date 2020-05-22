class Favorite
    attr_accessor :user, :song
    @@all=[]
    def initialize(user, song)
        @user = user
        @song = song
        Favorite.all << self
    end

    def self.all
        @@all
    end
    
end