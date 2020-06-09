class User < ApplicationRecord
  belongs_to :sign

  validates :name, uniqueness: { case_sensitive: false }
  validates :name, presence: true
  validates :age, numericality: { greater_than: 17 }

  validate :name_can_not_be_greg

  def name_can_not_be_greg
    if self.name && self.name == 'scott'
      self.errors.add(:name, 'can not be me uncle')
    end  
  end 

end
