class Video < ApplicationRecord
  validates :title, :description, :author_id, presence: true

  has_attached_file :video,
    styles: { thumb: {format: "jpg", time: 1}},
    processors: [:transcoder]

  validates_attachment_content_type :video, content_type: /\Avideo\/.*\z/
end
