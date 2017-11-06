# BluTube

[BluTube live link](http://blutube.herokuapp.com)

BluTube is a YouTube clone which uses a single page design and demonstrates many of the site's key features. The backend runs on Rails and uses a PostgreSQL database while the front is built on React with Redux. All image and video hosting is done through AWS.

## Features & Implementation

### Video Upload

Videos can be dragged and dropped onto the screen or found using the file finder. Once found a preview is displayed. The user can upload a video or if it was previously uploaded and is their own, edit the title and description. While the upload is running the page just waits and then redirects to the video's viewing page upon completion.

### Video Likes

Likes can be created, updated, and deleted. The totals are displayed and used in the homepage filter.

###Video Filter and Search

Videos can be sorted by most viewed, most liked, length, and newest. They can also be searched for using any content from the title or description.

###Video Watching Page

The video watching page is responsive to window width changes and even looks good on mobile. The player is responsive to some of the standard youtube player shortcut keys.

## To Be Added

There are more features I'll be adding to this project as time goes on, some are outlined below.

### Comments & Replies & Comment Likes

Users will be able to comment on any video and reply to any comment. Comments and replies will be likable.

### Video Search

Video search was implemented but it will be updated to work upon page refresh and will become more flexible (not only looking for exact word matches)

### Subscribers

Users will be allowed to subscribe to their favorite channels and view all of those channels in the sidebar menu. Channels will also have their own display page.
