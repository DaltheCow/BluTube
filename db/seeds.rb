# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

jomez = User.create!(username: 'JomezPro', password: 'discgolf')
superman = User.create!(username: 'Superman', password: 'loislane')
animalkingdom = User.create!(username: 'AnimalKingdom', password: 'skatpoop')
homevideos = User.create!(username: 'HomeVideos', password: 'americasfuniest')
movies = User.create!(username: 'HomeVideos', password: 'americasfuniest')


user1 = User.create!(username: 'user1', password: 'starwars')
user2 = User.create!(username: 'user2', password: 'starwars')
user3 = User.create!(username: 'user3', password: 'starwars')
user4 = User.create!(username: 'user4', password: 'starwars')
user5 = User.create!(username: 'user5', password: 'starwars')
user6 = User.create!(username: 'user6', password: 'starwars')
user7 = User.create!(username: 'user7', password: 'starwars')
user8 = User.create!(username: 'user8', password: 'starwars')
user9 = User.create!(username: 'user9', password: 'starwars')
user10 = User.create!(username: 'user10', password: 'starwars')
user11 = User.create!(username: 'user11', password: 'starwars')
user12 = User.create!(username: 'user12', password: 'starwars')
user13 = User.create!(username: 'user13', password: 'starwars')
user14 = User.create!(username: 'user14', password: 'starwars')
user15 = User.create!(username: 'user15', password: 'starwars')
user16 = User.create!(username: 'user16', password: 'starwars')
user17 = User.create!(username: 'user17', password: 'starwars')
user18 = User.create!(username: 'user18', password: 'starwars')

Video.destroy_all

video1 = Video.create!(title: , description: , video: , author_id: )

video1 = Video.create!(title: "Sortalot app demo", description: "This game isn't complete yet, this is just a demo version", video: 'https://s3.amazonaws.com/blutube-dev/videos/videos/000/000/Sortalot.mov', author_id: homevideos.id)

video2 = Video.create!(title: 'Paul McBeth Disc Golf Hole In One - Texas States 2017 Round Two
', description: "Paul McBeth Disc Golf Hole In One Ace\r\nTexas States Disc Golf Championship 2017 Round Two\r\nHole 15 Milby Disc Golf Course Houston, Texas\r\nJomez Productions\r\n\rCamera: Chase Hayden\r\n\rGraphics by Overstable Studios",
video: 'https://s3.amazonaws.com/blutube-dev/videos/videos/000/000/Paul+McBeth+Disc+Golf+Hole+In+One+-+Texas+States+2017+Round+Two.mp4
', author_id: jomez.id)

video3 = Video.create!(title: "Now THIS is as close to an ACE as you can get! | Paul McBeth", description: "Paul McBeth nearly aces Hole 5 at the Eureka Temp course in Round 3 of the 2017 Ledgestone Insurance Open.\r\n\rGraphics by Overstable Studios\r\n\rMusic by Starframe Audio", video: "https://s3.amazonaws.com/blutube-dev/videos/videos/000/000/Now+THIS+is+as+close+to+an+ACE+as+you+can+get!+-+Paul+McBeth.mp4", author_id: jomez.id)

Like.create!(user_id: user1.id, video_id: video1.id, like_value: true)
Like.create!(user_id: user2.id, video_id: video1.id, like_value: true)
Like.create!(user_id: user3.id, video_id: video1.id, like_value: true)
Like.create!(user_id: user4.id, video_id: video1.id, like_value: true)
Like.create!(user_id: user5.id, video_id: video1.id, like_value: false)
Like.create!(user_id: user6.id, video_id: video1.id, like_value: false)

Like.create!(user_id: user1.id, video_id: video2.id, like_value: false)
Like.create!(user_id: user2.id, video_id: video2.id, like_value: false)
Like.create!(user_id: user3.id, video_id: video2.id, like_value: false)
Like.create!(user_id: user4.id, video_id: video2.id, like_value: false)
Like.create!(user_id: user5.id, video_id: video2.id, like_value: true)
Like.create!(user_id: user6.id, video_id: video2.id, like_value: true)
Like.create!(user_id: user7.id, video_id: video2.id, like_value: true)
Like.create!(user_id: user8.id, video_id: video2.id, like_value: true)
Like.create!(user_id: user9.id, video_id: video2.id, like_value: true)
Like.create!(user_id: user10.id, video_id: video2.id, like_value: true)
Like.create!(user_id: user11.id, video_id: video2.id, like_value: true)
Like.create!(user_id: user12.id, video_id: video2.id, like_value: true)


Like.create!(user_id: user1.id, video_id: video3.id, like_value: false)
Like.create!(user_id: user2.id, video_id: video3.id, like_value: false)
Like.create!(user_id: user3.id, video_id: video3.id, like_value: false)
Like.create!(user_id: user4.id, video_id: video3.id, like_value: false)
Like.create!(user_id: user5.id, video_id: video3.id, like_value: true)
Like.create!(user_id: user6.id, video_id: video3.id, like_value: false)
Like.create!(user_id: user7.id, video_id: video3.id, like_value: false)
Like.create!(user_id: user8.id, video_id: video3.id, like_value: true)
Like.create!(user_id: user9.id, video_id: video3.id, like_value: true)
Like.create!(user_id: user10.id, video_id: video3.id, like_value: true)
Like.create!(user_id: user11.id, video_id: video3.id, like_value: true)
Like.create!(user_id: user12.id, video_id: video3.id, like_value: true)
Like.create!(user_id: user13.id, video_id: video3.id, like_value: true)
Like.create!(user_id: user14.id, video_id: video3.id, like_value: true)
Like.create!(user_id: user15.id, video_id: video3.id, like_value: true)
Like.create!(user_id: user16.id, video_id: video3.id, like_value: true)
Like.create!(user_id: user17.id, video_id: video3.id, like_value: true)
Like.create!(user_id: user18.id, video_id: video3.id, like_value: true)
