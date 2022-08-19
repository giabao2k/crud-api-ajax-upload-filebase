import { Router } from "express";
import categoryController from "../controller/category-controller";
export const categoryRouter = Router();
categoryRouter.get('',categoryController.getAll);
categoryRouter.post('',categoryController.addCategory);
categoryRouter.put('/:id',categoryController.updateCategory);
categoryRouter.delete('/:id',categoryController.deleteCategory);
categoryRouter.get('/:id',categoryController.getCategory);
