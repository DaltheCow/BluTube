json.extract! video, :id, :title, :description
json.videoUrl asset_path(video.video.url)
