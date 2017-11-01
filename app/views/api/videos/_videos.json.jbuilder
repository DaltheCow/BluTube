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

like_count = 0
dislike_count = 0
video.likes.each do |like|
  like.like_value ? like_count += 1 : dislike_count += 1
end

json.likes like_count
json.dislikes dislike_count

c_u_like = current_user.likes.find_by(video_id: video.id)
if c_u_like
  json.currentUsersLike do
    json.extract! c_u_like, :user_id, :video_id, :id, :like_value
  end
else
  json.currentUsersLike do
    json.like_value  "N/A"
  end
end
