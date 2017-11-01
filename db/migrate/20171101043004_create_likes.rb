class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.string :user_id, null: false
      t.string :video_id, null: false
      t.boolean :like_value, null: false

      t.timestamps
    end

    add_index :likes, :user_id
    add_index :likes, :video_id
  end
end
