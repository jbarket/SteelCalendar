class AddToEvents < ActiveRecord::Migration
  def change
    add_column :events, :created_by, :integer
    add_column :events, :major_convention, :boolean
    add_column :events, :major_convention_approved, :datetime
  end
end
