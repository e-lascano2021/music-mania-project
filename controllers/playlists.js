import { Playlist } from '../models/playlist.js'
import { Profile } from '../models/profile.js'

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
    owner: req.user.profile._id
    // owner id
  })
  .catch(err => {
    console.log(err)
    res.redirect("/playlists")
  })
}

function create(req, res) {
  Playlist.create(req.body)
  //creating playlist 
  .then(playlist => {
    //each playlist update the owner
    console.log("ndfn", playlist)
    Profile.updateOne({_id: playlist.owner}, {$push: {playlists: playlist}})
    //creating specfic playlist that owner created and its updating the playlists ownerid 
    // 
    .then( result => {
      res.redirect(`/profiles/${req.user.profile._id}`)
      })

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