export const fetchVideos = () => (
  $.ajax({
    method: "get",
    url: "/api/videos"
  })
);

export const fetchVideo = (id) => (
  $.ajax({
    method: "get",
    url: `/api/videos/${id}`
  })
);

export const uploadVideo = (video) => {
  return $.ajax({
    method: "post",
    url: "/api/videos",
    contentType: false,
    processData: false,
    data: video
  });
};

export const updateVideo = (video, id) => {
  return $.ajax({
    method: "patch",
    url: `/api/videos/${id}`,
    contentType: false,
    processData: false,
    data: video
  });
};

export const deleteVideo = (id) => (
  $.ajax({
    method: "delete",
    url: `/api/videos/${id}`
  })
);

export const addView = (id) => (
  $.ajax({
    method: "patch",
    url: `/api/videos/${id}`,
    data: { addView: true}
  })
);

export const fetchChannelVideos = (userId) => (
  $.ajax({
    method: "get",
    url: `/api/users/${userId}/videos`
  })
);
