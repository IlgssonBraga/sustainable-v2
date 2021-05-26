const {Router} = require("express")
const UserController = require('../app/controllers/UserController');
const SessionController = require('../app/controllers/SessionController');
const authMiddleware = require('../app/middlewares/auth');
const routes = Router()


const userController = new UserController();
const sessionController = new SessionController();
// routes.get("/", (req,res) => res.send('Main page'))
routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);
routes.use(authMiddleware);
routes.get('/users', userController.index);
routes.get('/users/:id', userController.show);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

module.exports = {
    routes
}