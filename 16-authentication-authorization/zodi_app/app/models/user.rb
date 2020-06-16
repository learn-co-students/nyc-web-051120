class User < ApplicationRecord
  belongs_to :sign

  validates :name, uniqueness: { case_sensitive: false }
  validates :name, presence: true
  validates :age, numericality: { greater_than: 17 }

  validate :name_can_not_be_greg
  has_secure_password

  def name_can_not_be_greg
    if self.name && self.name == 'scott'
      self.errors.add(:name, 'can not be me uncle')
    end  
  end 


  # def password=(secret)
  #   hash_pass = BCrypt::Password.create(secret)
  #   self.rando_password = hash_pass 
  #   self.password_digest = hash_pass
  # end

  # def password
  # end 
end
