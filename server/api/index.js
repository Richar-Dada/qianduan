import { Router } from 'express'

import users from './users'
import tags from './tag'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(tags)

export default router
