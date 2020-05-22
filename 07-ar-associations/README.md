## Active Record Associations

- find_by vs where 
    - where allows for more customizability in our queries
        - "age > 18"
        - find_by(age: 18)
- delete vs destroy
    - return values are different
    - destroy will return the item you're destroying
    - delete will not


- Add an Artist table
- Artist has many songs 

- create artist table with new migration file
- add column to the songs table
- add the Active Record macros

- has many songs
- has many plays through songs
- has many users through plays through songs

Artist has many song
Song has many artists

1. remove the artist_id from songs 
2. create my features table
3. add the macros to the song, artist, and feature, models 

Add Genre 

1. What should the relationship be between Song/Genre 
    <!-- - Genre has many songs 
    - Song belongs to a genre   -->

    - Song has many genres 
    - Genre has many songs 

2. Artist
    - artist
        - what would the macro in artist be?  
            - has_many :genres, through: :songs

    - what would the name of the method be? 
        - genres


