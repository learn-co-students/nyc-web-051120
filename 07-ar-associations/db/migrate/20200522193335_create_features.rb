class CreateFeatures < ActiveRecord::Migration[6.0]
  def change
    create_table :features do |t|
      t.integer :artist_id
      t.integer :song_id
    end
  end
end
