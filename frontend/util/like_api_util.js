export const createLike = (videoId, like) => {
  return $.ajax({
      method: 'post',
      url: `/api/videos/${videoId}/likes`,
      data: { like }
  });
};

export const updateLike = (videoId, user_id, like) => {
  return $.ajax({
      method: 'patch',
      url: `/api/videos/${videoId}/likes/${user_id}`,
      data: { like }
  });
};

export const deleteLike = (id) => {
  return $.ajax({
      method: 'delete',
      url: `/api/likes/${id}`
  });
};
