json.extract! user, :id, :username

json.videoIds do
  json.array! user.videos.map{|video| video.id}
end

json.likes user.likes do |like|
  json.id like.id
  json.userId like.user_id
  json.videoId like.video_id
end
