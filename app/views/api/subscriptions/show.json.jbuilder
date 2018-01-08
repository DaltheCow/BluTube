json.sub do
  json.id @sub.id
  json.subscriberId @sub.subscriber_id
  json.subscribeeId @sub.subscribee_id
end

json.subCount User.find(@sub.subscribee_id).subscribers.count
