class CreateHomes < ActiveRecord::Migration[5.2]
  def change
    create_table :homes do |t|
      t.string :address, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :beds, null: false
      t.integer :baths, null: false
      t.integer :price, null: false
      t.boolean :sale, null: false
      t.boolean :rent, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end

    add_index :homes, :owner_id
    add_index :homes, [:latitude, :longitude], unique: true
    add_index :homes, :longitude
    add_index :homes, :beds
    add_index :homes, :baths
    add_index :homes, :price
  end
end
