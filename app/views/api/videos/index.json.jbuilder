@videos.each do |video|
  json.set! video.id do
    json.extract! video, :id, :title, :duration
    json.viewCount video.view_count
    date = video.created_at.to_formatted_s(:rfc822).split(' ')[1..3]
    fixed_date = "#{date[1]} #{date[0]}, #{date[2]}"
    json.createdAt fixed_date
    json.createdAtInt video.created_at.to_i * 1000
    json.thumbnailUrl video.video.url(:thumb)
    json.author do
      json.extract! video.author, :username, :id
    end
  end
end
