class AddViewCountToVideos < ActiveRecord::Migration[5.1]
  def change
    add_column :videos, :view_count, :integer, null: false
    add_index :videos, :view_count
  end
end
