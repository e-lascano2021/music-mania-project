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

function show(req, res) {
  Playlist.findById(req.params.id)
  .then(playlist => {
      res.render('playlists/show', {
        playlist,
        title: `${playlist.name}`,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/playlists")
  })
}

function deletePlaylist(req, res) {
  Playlist.findById(req.params.id)
  .then(playlist => {
    if (playlist.owner.equals(req.user.profile._id)) {
      playlist.delete()
      .then(() => {
        res.redirect(`/profiles/${ req.user.profile._id }`)
      })
    } else {
      throw new Error ("🚫 Not Authorized! 🚫")
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect("/playlists")
  })
}

function edit(req, res) {
  console.log("editinggg")
  Playlist.findById(req.params.id)
  .then(playlist => {
    res.render("playlists/edit", {
      title: "Edit Playlist",
      playlist
    })
  })
}

export {
index,
newPlaylist as new,
create,
show,
deletePlaylist as delete,
edit,
}