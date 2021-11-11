import mongoose from "mongoose"

const Schema = mongoose.Schema

const songSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  artist: {
    type: String,
    required: true,
  },

  genre: {
    type: String,
    enum: ["Pop", "Punk", "Country", "Latin", "Indie", "Rock", "Metal", "Classical", "Hip Hop", "Jazz", "90's", "Romance", "Heartbreak", "Uplifting"],
    required: true,
  },

  chorus: {
    type: String,
  required: true,
  }
})

const Song = mongoose.model("Song", songSchema)

export {
  Song
}