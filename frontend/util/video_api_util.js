export const uploadVideo = (video) => {
  return $.ajax({
    method: "post",
    url: "/api/videos",
    contentType: false,
    processData: false,
    data: video
  }).then(video => console.log(video));
};
