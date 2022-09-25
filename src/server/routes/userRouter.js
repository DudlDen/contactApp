import userController from '../contollers/userController'
const Router = require('express')
const router = new Router()

router.post('/', userController.create)
router.get('/', userController.getAll)
router.post('/:id', userController.update)
router.delete('/:id', userController.delete)

export default router
