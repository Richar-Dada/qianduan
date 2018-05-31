import { Router } from 'express'
import article from './../service/article'

const router = Router()

router.get('/articles', async function (req, res, next) {
  const result = await article.findAll()
  res.json(result)
})

router.post('/articles', async function (req, res, next) {
  const result = await article.create(req.body)
  res.json(result)
})

router.post('/articles/delete', async function (req, res, next) {
  const result = await article.delete(req.body)
  res.json(result)
})

export default router