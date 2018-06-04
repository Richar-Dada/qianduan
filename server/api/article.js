import { Router } from 'express'
import article from './../service/article'

const router = Router()

router.get('/articles', async function (req, res, next) {
  const result = await article.findAll()
  res.json(result)
})

router.get('/articles/:tag', async function (req, res, next) {
  const result = await article.findAll(req.params.tag)
  res.json(result)
})

router.get('/article/:id', async function (req, res, next) {
  const result = await article.findById(req.params.id)
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

router.post('/articles/update', async function (req, res, next) {
  const result = await article.update(req.body)
  res.json(result)
})

export default router