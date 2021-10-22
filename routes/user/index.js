const express = require('express')
const router = express.Router()
const { error } = require('../../modules/util')
const { User } = require('../../models')
const createError = require('http-errors')
const bcrypt = require('bcrypt')

router.get('/create', async (req, res, next) => {
  try {
    const result = await User.create({
      userid: 'booldook',
      userpw: await bcrypt.hash('1111', Number(process.env.BCRYPT_ROUND)),
      username: '불뚝',
      email: 'booldook',
    })
    res.json(result)
  }
  catch (err) {
    next(createError(err))
  }
})

router.get('/update/:id', async (req, res, next) => {
  User.update()
})

router.get('/delete/:id', (req, res, next) => {

})

router.get(['/read/', '/read/:id'], (req, res, next) => {

})

module.exports = router