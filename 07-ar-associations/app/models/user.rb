class User < ActiveRecord::Base
  has_many :plays
  has_many :songs, through: :plays
  has_many :artists, through: :songs

#  def artists 
#   self.songs.map do |song|
#     song.artists
#   end.flatten
#  end


end



