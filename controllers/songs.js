import { Playlist } from '../models/playlist.js'
import { Profile } from '../models/profile.js'
import { Song } from '../models/song.js'

function index(req, res) {
  Song.find({})
  .then(songs => {
    Profile.findById( req.user.profile._id )
    .populate( "playlists" )
    .then(profile => {
      res.render('songs/index', {
        songs,
        title: 'Browse Music',
        profile
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/songs`)
  })
}


function newSong (req, res) {
  res.render('songs/new', {
    title: "Add Songs",
  })
  .catch(err => {
    console.log(err)
    res.redirect("/songs")
  })
}

function create(req, res) {
  Song.create(req.body)
  .then(song => {
    res.redirect("/songs")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/songs")
  })
}

function addToPlaylist(req, res) {
  console.log("playlistID#", req.body.playlistId)
  console.log("playlistId", req.body)
  Song.findById( req.params.id)
  .then( song => {
    Playlist.updateOne({_id: req.body.playlistId }, {$push: {songs: song}})
    .then(() => {
      res.redirect(`/playlists/${req.body.playlistId}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/songs")
  })
}

export {
  index,
  newSong as new,
  create,
  addToPlaylist,
}