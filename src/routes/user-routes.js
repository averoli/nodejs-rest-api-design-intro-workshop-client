const Router = require("express").Router;

const { authMiddleware } = require("../middleware/auth-middleware");

const userController = require("../controllers/user-controller");

const UserRouter = Router();

UserRouter.post("/sigh-up", authMiddleware, userController.signUp);

module.exports = UserRouter;
