class CreateEventTypes < ActiveRecord::Migration
  def change
    create_table :event_types do |t|
      t.string :name
      t.string :color
      t.timestamps
    end

    add_column :events, :event_type_id, :integer
  end
end
