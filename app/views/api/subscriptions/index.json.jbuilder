json.subscriptions do
  @user.subscriptions.each do |sub|
    json.set! sub.id do
      json.id sub.id
      json.subscriberId sub.subscriber_id
      json.subscribeeId sub.subscribee_id
    end
  end
end
