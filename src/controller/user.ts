import { Request, Response } from "express"
import ControllerInterface from "./interface"
import bcrypt from "bcrypt"
import db from "../db/models"

class UserController implements ControllerInterface {
    public async index(req: Request, res: Response): Promise<Response> {
        const users = await db.User.findAll()
        return res.send(users)
    }
    public async create(req: Request, res: Response): Promise<Response> {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        await db.User.create(req.body)
        return res.json({'msg':'success saved'});
    }
    public async show(req: Request, res: Response): Promise<Response> {
        const users = await db.User.findOne({where: {id: req.params.id}})
        return res.send(users)
    }
    public async update(req: Request, res: Response): Promise<Response> {
        await db.User.update(req.body, {where: {id: req.params.id}})
        return res.json({'msg':'success updated'});
    }
    public async delete(req: Request, res: Response): Promise<Response> {
        await db.User.destroy({where: {id: req.params.id}})
        return res.json({'msg':'success deleted'});
    }
}

export default UserController