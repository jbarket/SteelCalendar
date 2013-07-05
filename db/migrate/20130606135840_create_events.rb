class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.datetime :starts_at
      t.datetime :ends_at
      t.string :name
      t.text :description
      t.float :latitude
      t.float :longitude
      t.string :street
      t.string :street2
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :country

      t.timestamps
    end
  end
end
