import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as songsCtrl from '../controllers/songs.js'

const router = Router()

//localhost:3000/songs/
router.get('/', isLoggedIn, songsCtrl.index)

//localhost:3000/songs/new
router.get('/new', isLoggedIn, songsCtrl.new)

//localhost:3000/songs/new 
router.post('/new', isLoggedIn, songsCtrl.create)

router.post('/:id', isLoggedIn, songsCtrl.addToPlaylist)

export {
  router
}