import { Router } from 'express'

import users from './users'
import tags from './tag'
import articles from './article'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(tags)
router.use(articles)

export default router
