export const fetchSubs = () => (
  $.ajax({
    url: `api/subscriptions`,
    method: 'get'
  })
);

export const createSub = (userId) => (
  $.ajax({
    url: `api/users/${userId}/subscriptions`,
    method: 'post'
  })
);

export const deleteSub = (subId) => (
  $.ajax({
    url: `api/subscriptions/${subId}`,
    method: 'delete'
  })
);
