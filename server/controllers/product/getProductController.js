import mongoose from 'mongoose'
import product from '../../models/product.js'
import asyncHandler from 'express-async-handler'
const mainController = asyncHandler(async (req, res) => {
    const accesedProduct = await product.findById(mongoose.Types.ObjectId(req.params._id))
    if (accesedProduct) {
        res.json(accesedProduct)
    } else {
        res.json({
            message: 'This product is not available'
        })
    }
}
)

export default mainController