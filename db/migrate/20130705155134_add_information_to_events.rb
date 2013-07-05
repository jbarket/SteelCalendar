class AddInformationToEvents < ActiveRecord::Migration
  def change
    add_column :events, :tournament_info, :text
  end
end
