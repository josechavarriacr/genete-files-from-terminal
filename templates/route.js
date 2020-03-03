const { Router } = require('express')

const {
  create,
  findOne,
  findAll,
  update,
  remove,
} = require('../controllers/model.controller')

const router = Router()

router.route('/').get(findAll)
router.route('/:id').get(findOne)
router.route('/').post(create)
router.route('/:id').put(update)
router.route('/:id').delete(remove)

module.exports = router