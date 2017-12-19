export const fetchSubscriptions = () => (
  $.ajax({
    url: `api/subscriptions`,
    method: 'get'
  })
);

export const createSubscription = (userId) => (
  $.ajax({
    url: `api/users/${userId}/subscriptions`,
    method: 'post'
  })
);

export const deleteSubscription = (subId) => (
  $.ajax({
    url: `api/subscriptions/${subId}`,
    method: 'delete'
  })
);
