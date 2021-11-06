import { Playlist } from '../models/playlist.js'

function index(req, res) {
  //console.log("i work")
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


export {
index,
}