json.extract! video, :id, :title, :description, :duration
json.viewCount video.view_count
json.createdAt video.created_at
json.videoUrl asset_path(video.video.url)
json.thumbnailUrl asset_path(video.video.url(:thumb))
json.author do
  json.extract! video.author, :username, :id
end
