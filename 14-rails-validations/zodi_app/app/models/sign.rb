class Sign < ApplicationRecord
  has_many :users

  # def name_plus_element
  #   "#{self.name} - #{self.element}"
  # end 
end
