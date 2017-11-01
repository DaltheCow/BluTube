class Like < ApplicationRecord
  validates :user_id, uniqueness: { scope: :video_id }

  belongs_to :user
  belongs_to :video
  
end
