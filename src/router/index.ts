import { Router, Request, Response } from "express";
import UserRouter from "./user";

const router: Router = Router()

router.get("/", (req: Request, res: Response) => {
    return res.json({
        name: "Express Application",
        author: "Muhammad Shafa"
    })
})
router.use(new UserRouter().router)

export default router