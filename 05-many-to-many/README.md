## OO Associations (Many to Many/Has many Through)

- attr_accessor vs attr_reader
- self 

What if two users add the same song

User has many Songs
Song has many Users 
    - This necesitates a join model 


What are some methods (class or instance) methods that would make sense for our Song and Favorite models to have? 

- User should see all of their associated songs
- Song knows which users it's associated with



- which other users like the same song
- Which song is played the most



- How many times have a specific user played a song



- User can delete a song (de-favorite a song)
- Favorite should know what date it was added

- which song is most popular 
- recommend a favorite song

