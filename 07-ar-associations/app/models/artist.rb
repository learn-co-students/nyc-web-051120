class Artist < ActiveRecord::Base
    has_many :features
    has_many :songs, through: :features
end