json.extract! user, :id, :username

json.videoIds do
  json.array! user.videos.map{|video| video.id}
end

if !for_other_user
  json.likes user.likes do |like|
    json.id like.id
    json.userId like.user_id
    json.videoId like.video_id
  end

  json.subIds do
    json.array! user.subscriptions.map{|sub| sub.id}
  end
else

  json.subCount user.subscribers.count
end
