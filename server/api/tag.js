import { Router } from 'express'
import tag from './../service/tag'

const router = Router()

router.get('/tags', async function (req, res, next) {
  const result = await tag.findAll()
  res.json(result)
})

router.post('/tags', async function (req, res, next) {
  const result = await tag.create(req.body)
  res.json(result)
})

router.post('/tags/delete', async function (req, res, next) {
  const result = await tag.delete(req.body)
  res.json(result)
})

export default router