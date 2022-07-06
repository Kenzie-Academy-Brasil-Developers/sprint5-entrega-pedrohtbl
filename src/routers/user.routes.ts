import { Router } from "express"
import { createUserController, deleteUserController, listUserController, listUsersController, updateUserController } from "../controllers/user.controllers"
import userExistsMiddleware from "../middlewares/userExists.middleware"

const userRouter = Router()

userRouter.post('', createUserController)
userRouter.get('', listUsersController)
userRouter.get('/:id',listUserController)
userRouter.patch('/:id', updateUserController)
userRouter.delete('/:id',userExistsMiddleware, deleteUserController)

export default userRouter