class ChangeViewCountInVideos < ActiveRecord::Migration[5.1]
  def change
    remove_column :videos, :view_count, :integer, null: false
    add_column :videos, :view_count, :integer, null: false, default: 0
  end
end
