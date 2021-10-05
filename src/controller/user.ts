import { Request, Response } from "express"
import ControllerInterface from "./interface"
import db from "../db/models"

class UserController implements ControllerInterface {
    public async show(req: Request, res: Response): Promise<Response> {
        const users = await db.User.findAll()
        return res.send(users)
    }
    public async create(req: Request, res: Response): Promise<Response> {
        await db.User.create(req.body)
        return res.json({'msg':'success saved'});

    }

}

export default UserController