class CreateVideos < ActiveRecord::Migration[5.1]
  def change
    create_table :videos do |t|
      t.text :description, null: false
      t.string :author_id, null: false
      t.string :title, null: false

      t.timestamps
    end
    add_index :videos, :author_id
  end
end
