json.extract! video, :id, :title, :description
json.videoUrl asset_path(video.video.url)
json.thumbnail_url asset_path(video.video.url(:thumb))
json.video video.video.length
