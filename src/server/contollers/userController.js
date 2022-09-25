import ApiError from "../error/apiError";
import {User} from "../models/models";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class UserController {
    async create(req, res, next) {
        const {name, phone} = req.body
        if (!name || !phone) {
            return next(ApiError.badRequest('нет имени или телефона'))
        }
        await User.create({name,phone})
        const users = await User.findAll({order: [['id', 'DESC']]})
        return res.json(users)
    }
    async getAll(req, res, next) {
        const users = await User.findAll({order: [['id', 'DESC']]})
        return res.json(users)
    }
    async update(req, res, next) {
        const {name, phone} = req.body
        const {id} = req.params
        if (name) {
            await User.update({name},{where: {id}})
        }
        if (phone) {
            await User.update({phone},{where: {id}})
        }
        const users = await User.findAll({order: [['id', 'DESC']]})
        return res.json(users)
    }
    async delete(req, res, next) {
        const {id} = req.params
        await User.destroy({where:{id}})
        const users = await User.findAll({order: [['id', 'DESC']]})
        return res.json(users)
    }
}

const userController = new UserController()
export default userController
