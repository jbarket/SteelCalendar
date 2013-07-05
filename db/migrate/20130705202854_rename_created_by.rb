class RenameCreatedBy < ActiveRecord::Migration
  def change
    rename_column :events, :created_by, :created_by_id
  end

end
