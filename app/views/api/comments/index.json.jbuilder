@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :body
    json.viewCount comment.view_count
    json.likes comment.likes.each.select{|like| like.like_value}.length
    date = comment.created_at.to_formatted_s(:rfc822).split(' ')[1..3]
    fixed_date = "#{date[1]} #{date[0]}, #{date[2]}"
    json.createdAt fixed_date
    json.createdAtInt comment.created_at.to_i * 1000
    json.author do
      json.extract! comment.author, :username, :id
    end
  end
end

#have to get user state and
