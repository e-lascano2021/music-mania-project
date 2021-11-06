import mongoose from "mongoose"

const Schema = mongoose.Schema


const playlistSchema = new Schema({
  name: String,
  description: String,

  songs: {
    type: Schema.Types.ObjectId,
    ref: "Song"
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref:"Profile"
  }
})

const Playlist = mongoose.model("Playlist", playlistSchema)

export {
  Playlist
}