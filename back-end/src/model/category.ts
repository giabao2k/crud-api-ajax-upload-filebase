import { model, Schema } from "mongoose"

export interface ICategory {
    name: string;
    description: string;
    image: string
}

const categorySchema = new Schema<ICategory>({
    name: String,
    description: String,
    image: String
})

const Category = model<ICategory>('categories', categorySchema);

export {Category};