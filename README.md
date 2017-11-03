# BluTube

[BluTube live link](http://blutube.herokuapp.com)

BluTube is a YouTube clone which demonstrates many of the site's key features. The backend runs on Rails and uses a PostgreSQL database while the front is built on React with Redux.

## Features & Implementation

### Video Upload

Videos can be dragged and dropped onto the screen or found using the file finder. Once found a preview is displayed. The user can upload a video or if it was previously uploaded and is their own, edit the title and description. While the upload is running the page just waits and then redirects to the video show for the new video upon completion.

### Video Likes

Likes can be created (if you don't already like or dislike the video), updated (if you want to switch your like), or deleted (if you want to return to no like status). The totals are displayed

### Direct messages

![Direct messaging example](docs/direct-messaging.gif)

Direct messages can only be seen by a specified group of members. The number of members per channel is limited to 7 users. Unlike regular channels, which can be muted, direct messages will always notify all specified members.

### Notifications

Along with updating the message feed, every message created generates a notification for every subscribed member. Notification are cleared on channel entry.

### Giphy integration

![Giphy example](docs/giphy.gif)

By typing the command `/giphy` followed by a query string, users can generate a random related GIF from Giphy's library. This is accomplished using Giphy's public API.

### Single page

Sloth is a single page app that allows for quick navigation between its various components. As data is fetched from Rails, components are only updated when necessary.

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for Sloth are outlined below.

### Search

Slack has a global search that allows users to find specific messages or other users. The results populate a list that appears in a new right-hand sidebar component. I intend to build this new component up using the Fuse.js library for fuzzy-searching.

### Reactions

Slack allows users to leave reactions to individual messages. Reactions are essentially tags that are associated with emojis. Slack admins can also create custom emojis. To build this I would have to build a new component for emoji selection.
