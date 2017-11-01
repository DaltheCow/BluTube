json.extract! user, :id, :username
json.videoIds do
  json.array! user.videos.map{|video| video.id}
end
json.likeIds do
  json.array! user.likes.map{|like| like.id}
end
