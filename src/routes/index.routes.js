const {Router, response} = require("express")

const routes = Router()

routes.get("/", (req,res) => res.send('Main page'))

module.exports = {
    routes
}