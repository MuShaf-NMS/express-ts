import { Router } from "express";
import UserController from "../controller/user";
import RouterInterface from "./interface";

class UserRouter implements RouterInterface {
    public route = "/user"
    public router = Router()
    public controller = new UserController()
    
    constructor() {
        // this.get()
        // this.getOne()
        // this.post()
        this.withParams()
        this.withoutParams()
    }

    public withParams() {
        this.router
        .route
        (`${this.route}/:id`)
        .get(this.controller.show)
        .put(this.controller.update)
        .delete(this.controller.delete)
    }

    public withoutParams() {
        this.router.route(this.route)
        .get(this.controller.index)
        .post(this.controller.create)
    }

    // public get() {
    //     this.router.get(this.route, this.controller.index)
    // }

    // public getOne() {
    //     router.get(this.route, this.controller.show)
    // }

    // public post() {
    //     this.router.post(this.route, this.controller.create)
    // }
}

export default UserRouter