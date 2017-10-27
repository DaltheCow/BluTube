class Video < ApplicationRecord
  validates :title, :description, :author_id, presence: true

  has_attached_file :video,
    :styles => {:thumbnail_img => ["400x400#", :jpg]}

  validates_attachment_content_type :video, content_type: /\Avideo\/.*\z/
end
