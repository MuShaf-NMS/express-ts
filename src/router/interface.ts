import { Router } from "express";
import ControllerInterface from "../controller/interface";

interface RouterInterface {
    route: string
    router: Router
    controller: ControllerInterface
}

export default RouterInterface