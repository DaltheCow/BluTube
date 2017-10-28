json.extract! user, :id, :username
json.videoIds do
  json.array! user.videos.map{|video| video.id}
end
