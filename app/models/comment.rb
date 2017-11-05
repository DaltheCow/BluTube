class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :video
  belongs_to :author,
    foreign_key: :author_id,
    class_name: 'User'


end
