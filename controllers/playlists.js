import { Playlist } from '../models/playlist.js'

function index(req, res) {
  Playlist.find({})
  .then(playlists => {
    res.render("playlists/index", {
      title: "Browse Playlists",
      playlists
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/playlists")
  })
}


function newPlaylist(req, res) {
  res.render('playlists/new', {
    title: "Create Playlist",
  })
  .catch(err => {
    console.log(err)
    res.redirect("/playlists")
  })
}

function create(req, res) {
  Playlist.create(req.body)
  .then(playlist => {
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect("/playlists")
  })
}

export {
index,
newPlaylist as new,
create,
}