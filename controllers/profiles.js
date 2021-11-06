import { Profile } from '../models/profile.js'

function index(req, res){
  Profile.find({})
  .then(profiles => [
    res.render('profiles/index', {
      profiles,
      title: 'Music Maniacs'
    })
  ])
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles`)
  })
}


export {
  index,
}