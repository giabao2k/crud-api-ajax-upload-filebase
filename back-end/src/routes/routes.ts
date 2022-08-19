import { Router } from "express";
import { categoryRouter } from "./category-route";

export const routes = Router();

routes.use('/categories',categoryRouter);
