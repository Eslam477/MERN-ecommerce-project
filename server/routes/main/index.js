import express from "express"
import mainController from "../../controllers/mainController.js"


const main = express.Router()
main.get('/main', mainController)


export default main