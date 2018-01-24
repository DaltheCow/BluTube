export const fetchUser = id => (
  $.ajax({
    method: 'get',
    url: `api/users/${id}`
  })
);
