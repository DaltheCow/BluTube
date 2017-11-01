class Like < ApplicationRecord
  validates :user_id, :video_id, presence: true
  validates :like_value, inclusion: { in: [true, false] }
  validates :user_id, uniqueness: { scope: :video_id }

  belongs_to :user
  belongs_to :video

end
