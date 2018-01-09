subs = @user.subscriptions

json.subscriptions do
  subs.each do |sub|
    json.set! sub.id do
      json.id sub.id
      json.subscriberId sub.subscriber_id
      json.subscribeeId sub.subscribee_id
    end
  end
end

json.users do
  subs.each do |sub|
    user = User.find(sub.subscribee_id)
    json.set! user.id do
      json.id user.id
      json.username user.username
    end
  end
end
