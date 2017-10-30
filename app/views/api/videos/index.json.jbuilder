json.array! @videos do |video|
  json.extract! video, :id, :title, :duration
  json.viewCount video.view_count
  json.createdAt video.created_at
  json.thumbnailUrl video.video.url(:thumb)
  json.author do
    json.extract! video.author, :username, :id
  end
end
