const express = require('express')
const router = express.Router()
const { error } = require('../../modules/util')
const { sequelize, Sequelize, User, Board } = require('../../models')
const createError = require('http-errors')
const bcrypt = require('bcrypt')

router.get('/create', async (req, res, next) => {
  try {
    const result = await User.create({
      userid: 'booldook6',
      userpw: await bcrypt.hash('1111', Number(process.env.BCRYPT_ROUND)),
      username: '불뚝',
      email: 'booldook@gmail.com',
    })
    res.json(result)
  }
  catch (err) {
    next(createError(err))
  }
})

router.get('/update/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    // User.update({ 고칠내용 }, { WHERE })
    const result = await User.update({
      username: '불뚝~~~~',
    }, {
      where: { id }
    })
    res.json(result)
  }
  catch (err) {
    next(createError(err))
  }
})

router.get('/delete/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    // User.destroy({ WHERE })
    const result = await User.destroy({
      where: { id }
    })
    res.json(result)
  }
  catch (err) {
    next(createError(err))
  }
})

// https://sequelize.org/master/manual/model-querying-basics.html
router.get('/read', async (req, res, next) => {
  try {
    /* field 옵션 */
    /* const result = await User.findAll() */
    /* const result = await User.findAll({
      attributes: ['id', 'username']
    }) */
    /* const result = await User.findAll({
      attributes: [
        [sequelize.fn('COUNT', sequelize.col('id')), 'id_count'],
      ]
    }) */
    /* const result = await User.findAll({
      attributes: {
        exclude: ['userpw']
      }
    }) */

    /* WHERE 옵션 */
    const { Op } = Sequelize
    /* const result = await User.findAll({
      where: {
        id: 1
      }
    }) */
    /* const result = await User.findAll({
      where: {
        [Op.and]: [
          { username: '불뚝~~~~' },
          { userid: 'booldook3' },
        ]
      }
    }) */
    /* const result = await User.findAll({
      where: {
        username: '불뚝~~~~',
        userid: 'booldook3'
      }
    }) */
    /* const result = await User.findAll({
      where: {
        username: {
          // [Op.like]: '%불뚝%',
          // [Op.substring]: '불뚝',
          [Op.regexp]: '^[불|뚝]'
        }
      }
    }) */
    /* const result = await User.findAll({
      order: [
        ['createdAt', 'desc'],
      ],
    }) */
    /* const result = await User.findAll({
      order: [
        ['createdAt', 'desc'],
      ],
      offset: 2,
      limit: 2
    })
    res.json(result) */
    
    const result = await User.findAll({
      order: [
        ['createdAt', 'desc'],
      ],
      offset: 2,
      limit: 2
    })
    res.json(result)
  }
  catch (err) {
    next(createError(err))
  }
})

router.get('/read2', async (req, res, next) => {
  try {
    const result = await User.findAll({
      attributes: ["username", "email"],
      where: {
        id: 3
      },
      order: [
        ['username', 'desc'],
        ['id', 'asc']
      ],
      include: [
        { model: Board, attributes: ["content", "writer"] },
        // { model: UserInfo, attributes: ["content", "writer"] },
      ],
      // ORDER BY username DESC, id ASC
    })
    res.json(result)

  }
  catch(err) {
    next(createError(err))
  }
})

module.exports = router