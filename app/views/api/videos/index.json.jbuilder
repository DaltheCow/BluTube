json.array! @videos do |video|
  json.extract! video, :id, :title,
  json.thumbnailUrl video.thumbnail_img.url
end
