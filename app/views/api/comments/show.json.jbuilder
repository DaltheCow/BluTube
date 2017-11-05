json.extract! comment, :id, :body
json.createdAtInt comment.created_at.to_i * 1000
json.authorId comment.author.id
#all that I will end up needing here are replies
