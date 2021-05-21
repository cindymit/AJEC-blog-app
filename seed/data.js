import db from '../db/connection.js'
import Post from '../models/post.js'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const posts =
    [
      {
        "title": "Project week is almost here!",
        "content": "I can't believe we're going to be starting our projects next Wednesday! Feels like yesterday that we just started the immersive!",
        "username": "ceethemit"
      },
      {
        "title": "When can I win the jackpot?",
        "content": "I just want to spend my days coding in Japan!",
        "username": "nimeroo"
      }
      {
        "title": "What is work-life balance?",
        "content": "Everyday I wake up tired but being tired isn't an excuse for me anymore. I just have to do what I have to do.",
        "username": "ealtidor"
      }
      {
        "title": "My wife's dog, Zeus has a god complex.",
        "content": "He literally does nothing. He's taking his name too seriously.",
        "username": "artemfm1"
      }
    ]

  await Post.insertMany(posts)
  console.log("Created posts!")

  // close database connection. done.
  db.close()
}

insertData()