class AddVenueNameToEvent < ActiveRecord::Migration
  def change
    add_column :events, :venue, :string
  end
end
