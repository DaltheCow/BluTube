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
like = current_user.likes.find_by(video_id: video.id)
if like
  json.currentUserLikes like.like_value
else
  json.currentUserLikes "N/A"
end
