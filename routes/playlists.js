import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as playlistsCtrl from '../controllers/playlists.js'

const router = Router()

//localhost:3000/playlists
router.get('/', isLoggedIn, playlistsCtrl.index)

//localhost:3000/playlists/new
router.get('/new', isLoggedIn, playlistsCtrl.new)

export {
  router
}