import userRouter from './userRouter'
const Router = require('express')
const router = new Router()

router.use('/user', userRouter)

export default router
