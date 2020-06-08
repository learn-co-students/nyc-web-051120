class CreateSigns < ActiveRecord::Migration[6.0]
  def change
    create_table :signs do |t|
      t.string :name
      t.string :date
      t.string :element
      t.string :img_url

      t.timestamps
    end
  end
end
