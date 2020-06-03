class CreateDoctors < ActiveRecord::Migration
  def change
    create_table :doctors do |t|
      t.string :name 
      t.string :skill
      t.integer :years_experience
      t.string :img_url 
    end 
  end
end
