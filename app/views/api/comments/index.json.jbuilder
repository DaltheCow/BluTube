json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body
      json.createdAtInt comment.created_at.to_i * 1000
      json.authorId comment.author.id
    end
  end
end

json.users do
  @comments.each do |comment|
    json.set! comment.author.id do
      json.extract! comment.author, :id, :username
    end
  end
end
