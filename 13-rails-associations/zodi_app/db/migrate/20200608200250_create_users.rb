class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :birthday
      t.string :img_url
      t.integer :age
      t.belongs_to :sign, null: false, foreign_key: true

      t.timestamps
    end
  end
end
