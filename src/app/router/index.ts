import { Router } from "express";
import { categoryRouter } from "../modules/category/category.route";

const router = Router();

const routes = [
    {
        path: "/categories",
        router: categoryRouter
    }
]

routes.forEach((route) => {
    router.use(route.path, route.router)
})

export default router