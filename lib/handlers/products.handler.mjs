import dbConnect from "../db/dbConnect.mjs";
import productModel from "../db/models/product.model.mjs";

export const getProducts = async (req, res) => {

    await dbConnect()
    let result = await productModel.find({})
  

    return result;
}

export const createProduct = async (product) => {

    await dbConnect()
    let result = await productModel.create(product)
  


}

export const deleteProduct = async (product) => {

    await dbConnect()
    let result = await productModel.findByIdAndDelete(product._id)
  


}

export const updateProduct = async (product) => {

    await dbConnect()
    let result = await productModel.findByIdAndUpdate(product._id, product)
  


}