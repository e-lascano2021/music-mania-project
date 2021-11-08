import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

//localhost:3000/profiles
router.get('/', isLoggedIn, profilesCtrl.index)

//localhost:3000/profiles/:id
router.get('/:id', isLoggedIn, profilesCtrl.show)

//localhost:3000/profiles/:id
router.delete('/:id', isLoggedIn, profilesCtrl.delete)

export {
  router
}