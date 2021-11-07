import mongoose from "mongoose"

const Schema = mongoose.Schema

const songSchema = new Schema({
  name: String,
  artist: String,
  genre: {
    type: String,
    enum: ["Pop", "Punk", "Country", "Latin", "Indie", "Rock", "Metal", "Classical", "Hip Hop", "Jazz", "90's", "Romance", "Heartbreak", "Uplifting"],
  },
  chorus: String
})

const Song = mongoose.model("Song", songSchema)

export {
  Song
}