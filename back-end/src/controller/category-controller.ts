import { NextFunction, Request, Response } from "express";
import { Category } from "../model/category";

class CategoryController{
    getAll = async (req: Request, res:Response) =>{
        let categories = await Category.find();
        res.status(200).json(categories);
    };
    addCategory = async (req: Request, res:Response, next: NextFunction) =>{
        try{
            let category = req.body;
            let categories = await Category.create(category);
            res.status(201).json(categories);
        }catch(err){
            next(err);

        }
    };
    deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try{
            let category = await Category.findById(id);
            if(category){
               category.delete();
               res.status(204).json(); 
            }else{
                res.status(404).json();
            }
        }catch(err){
            next(err);
        }
    };
    getCategory = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        let category = await Category.findById(id);
        try{
            if(!category){
                res.status(404).json();
            }else{
                res.status(200).json(category);
            }
        }catch(err){
            next(err);
        }
    };
    updateCategory = async (req: Request, res: Response) =>{
        let id = req.params.id;
        let category = await Category.findById(id);
        if(!category){
            res.status(404).json;
        }else{
            let data = req.body;
            await Category.findByIdAndUpdate({
                _id:id
            },data);
            data._id = id;
            res.status(200).json(data);   

        }
    }
}
export default new CategoryController();