export const fetchComments = (video_id) => ($.ajax({
  url: `api/videos/${video_id}/comments`,
  method: 'get'
}));

export const fetchComment = (video_id, comment_id) => ($.ajax({
  url: `api/videos/${video_id}/comments/${comment_id}`,
  method: 'get'
}));

export const createComment = (video_id, comment) => ($.ajax({
  url: `api/videos/${video_id}/comments`,
  method: 'post',
  data: { comment }
}));

export const updateComment = (video_id, comment) => ($.ajax({
  url: `api/videos/${video_id}/comments`,
  method: 'post',
  data: { comment }
}));

export const deleteComment = (comment_id) => ($.ajax({
  url: `api/comments/${comment_id}`,
  method: 'delete'
}));
