import { Router } from "express";
import UserController from "../controller/user";
import RouterInterface from "./interface";

class UserRouter implements RouterInterface {
    public route = "/user"
    public router = Router()
    public controller = new UserController()
    
    constructor() {
        this.get()
        this.post()
    }

    public get() {
        this.router.get(this.route, this.controller.show)
    }

    public post() {
        this.router.post(this.route, this.controller.create)
    }
}

export default UserRouter