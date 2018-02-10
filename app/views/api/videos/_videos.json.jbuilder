json.extract! video, :id, :title, :description, :duration
json.viewCount video.view_count
date = video.created_at.to_formatted_s(:rfc822).split(' ')[1..3]
fixed_date = "#{date[1]} #{date[0]}, #{date[2]}"
json.createdAt fixed_date
json.videoUrl asset_path(video.video.url)
json.thumbnailUrl asset_path(video.video.url(:thumb))
json.author do
  json.extract! video.author, :username, :id
end

likes_dislikes = video.likes_dislikes
json.likes likes_dislikes[0]
json.dislikes likes_dislikes[1]

c_u_like = current_user.likes.find_by(video_id: video.id) if logged_in?
if logged_in? && c_u_like
  json.currentUsersLike do
    json.extract! c_u_like, :user_id, :video_id, :id, :like_value
  end
else
  json.currentUsersLike do
    json.like_value  "N/A"
  end
end

json.commentIds do
  json.array! video.comments.map{|comment| comment.id}
end

json.createdAtInt video.created_at.to_i * 1000

json.sub do
  sub = current_user && current_user.subscriptions.find_by(subscribee_id: video.author.id)
  if sub
    json.id sub.id
    json.subscriberId sub.subscriber_id
    json.subscribeeId sub.subscribee_id
  end
end

json.subCount video.author.subscribers.count
