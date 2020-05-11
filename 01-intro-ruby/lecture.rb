require 'pry'


# 1. I am building a Songs application. I need to a way to hold all the information (title, duration, genre) about a SPECIFIC song. Which datatype should I use?
    # hash
    # {title: "Started From the Bottom", duration: 3, genre: "rap"}


# 2. Now, I need a way to hold a list of all of the songs in my app. Which datatype should I use? 
    songs_array = [{title: "Started From the Bottom", duration: 3, genre: "rap"}, {title: "We Belong Together", duration: 3, genre: "r&b"},{title: "Shake It Off", duration: 3, genre: "pop"}, {title: "In Da Club", duration: 3, genre: "rap"}]

# 3. I want to be to find all songs with a specific genre. How do I do that? What datatype should be returned?


    def all_songs_with_genre(songs=songs_array, genre)
        songs.select do |song|
            binding.pry
            # song[:genre] == genre
        end
    end

# 4. I want to be able to find a single song with a specific title. How do I do that? What datatype should be returned?

    def find_song_by_title(songs, title)
        songs.find do |song|
            song[:title] == title
        end
    end # => {title: "started", duration: 3, genre:"rap"}

# 6. I want a list of only the song titles of each song. How dod I do that? What datatype should be returned?

def all_song_titles(songs)
    songs.map do |song|
        song[:title]
    end
end # => ["Started", "In da club"]

binding.pry
