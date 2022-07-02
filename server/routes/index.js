import express from "express"
import mainDataRoute from "./main/index.js"
import product from "./product/index.js"
const routers = express.Router()

routers.use(mainDataRoute)
routers.use(product)
export default routers