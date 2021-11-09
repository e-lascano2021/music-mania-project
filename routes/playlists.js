import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as playlistsCtrl from '../controllers/playlists.js'

const router = Router()

//localhost:3000/playlists
router.get('/', isLoggedIn, playlistsCtrl.index)

//localhost:3000/playlists/new
router.get('/new', isLoggedIn, playlistsCtrl.new)

//localhost:3000/playlists/:id
router.get('/:id', isLoggedIn, playlistsCtrl.show)

//localhost:3000/playlists/edit
router.get('/:id/edit', isLoggedIn, playlistsCtrl.edit)

//localhost:3000/playlists/new
router.post('/new', isLoggedIn, playlistsCtrl.create)

//localhost:3000/playlists/:id
router.put("/:id", isLoggedIn, playlistsCtrl.update)

//localhost:3000/playlists/:id
router.delete('/:id', isLoggedIn, playlistsCtrl.delete)



export {
  router
}