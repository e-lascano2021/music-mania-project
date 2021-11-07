import mongoose from 'mongoose'
const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  playlists: [{
    type: Schema.Types.ObjectId, 
    ref: "Playlist"
  }],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}