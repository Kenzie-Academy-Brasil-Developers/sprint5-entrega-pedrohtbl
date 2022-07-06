import { Request, Response } from "express"
import createUserService from "../services/createUser.service"
import deleteUserService from "../services/deleteUser.service"
import listUserService from "../services/listUser.service"
import listUsersService from "../services/listUsers.service"
import updateUserService from "../services/updateUser.service"
import { instanceToPlain } from "class-transformer"

export const createUserController = async (req: Request, res: Response) =>{
    try {
        const {email, name,age,password} = req.body

        const newUser = await createUserService({name,email,password,age})

        return res.status(201).json(instanceToPlain(newUser))

    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message,
                error: error.message
            })
        }
    }
}

export const listUsersController = async (req: Request, res: Response) =>{
    try {
        const users = await listUsersService()

        return res.status(200).json(instanceToPlain(users))

    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export const listUserController = async (req: Request, res: Response) =>{
    try {
        const id = req.params.id
        const user = await listUserService(id)

        return res.status(200).json(instanceToPlain(user))
        
    } catch (error) {
        if(error instanceof Error){
            return res.status(404).json({
                message: error.message
            })
        }
    }
}

export const updateUserController = async (req: Request, res: Response) =>{
    try {
        const id = req.params.id
        const newUser = req.body

        const updatedUser = await updateUserService(id, newUser)

        return res.status(200).json(instanceToPlain(updatedUser))
        
    } catch (error) {
        if(error instanceof Error){
            return res.status(200).json({
                message: error.message
            })
        }
    }
}

export const deleteUserController = async (req: Request, res: Response) =>{
    try {
        const id = req.params.id
        await deleteUserService(id)
        
        return res.status(200).json({
            message: "User deleted"
        })
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}