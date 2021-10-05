import { Router } from "express";
// import app from "..";
import UserRouter from "./user";

const router: Router = Router()

router.use(new UserRouter().router)

export default router