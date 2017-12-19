class CreateSubscribers < ActiveRecord::Migration[5.1]
  def change
    create_table :subscriptions do |t|
      t.string :subscriber_id, null: false
      t.string :subscribee_id, null: false

      t.timestamps
    end
    add_index :subscriptions, [:subscriber_id, :subscribee_id], :unique => true
  end
end
