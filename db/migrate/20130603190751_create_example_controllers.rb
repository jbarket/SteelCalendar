class CreateExampleControllers < ActiveRecord::Migration
  def change
    create_table :example_controllers do |t|

      t.timestamps
    end
  end
end
