export const sendSearch = (query) => {
  return $.ajax({
    method: 'GET',
    url: `api/search/${query}`
  });
};
