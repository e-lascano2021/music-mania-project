import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as songsCtrl from '../controllers/songs.js'

const router = Router()

//localhost:3000/songs/
router.get('/', isLoggedIn, songsCtrl.index)



export {
  router
}