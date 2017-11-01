class Video < ApplicationRecord
  validates :title, :description, :author_id, presence: true

  has_attached_file :video,
    styles: { thumb: {format: "jpg", time: 1}},
    processors: [:transcoder]

  validates_attachment_content_type :video, content_type: /\Avideo\/.*\z/

  after_post_process :get_video_duration

  belongs_to :author,
    class_name: 'User'

  has_many :likes

  def get_video_duration
    result = `ffmpeg -i #{self.video.staged_path} 2>&1`
    r = result.match("Duration: ([0-9]+):([0-9]+):([0-9]+).([0-9]+)")
    if r
      self.duration = r[1].to_i*3600+r[2].to_i*60+r[3].to_i
    end
  end

end
