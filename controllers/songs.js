import { Song } from '../models/song.js'

function index(req, res) {
  Song.find({})
  .then(songs => [
    res.render('songs/index', {
      songs,
      title: 'Browse Music'
    })
  ])
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

function createSong(req, res) {
  console.log("making song lalalala")
}

export {
  index,
  newSong as new,
  createSong as create,
}