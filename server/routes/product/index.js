import express from "express"
import getProductController from "../../controllers/product/getProductController.js"
const product = express.Router()
product.get(`/product/:_id`, getProductController)


export default product