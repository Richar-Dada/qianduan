import { Router } from 'express'
import article from './../models/article'

const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' },
]

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

/* GET user by ID. */
router.get('/test', function (req, res, next) {
  console.log('test-----------------------------')
  console.log(article)
  
  article.findById(123).then((res) => {
    console.log('nul------------')
    console.log(res)
  })
  article.create({
    title: 'aaaa'
  }).then((res) => {
    console.log(res)
    res.send('aaa')
  })
 
})

export default router
