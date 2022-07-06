import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"
import { IUser } from "../interfaces/user.interfaces"

const listUsersService = async (): Promise<IUser[]> =>{
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.find()
    
    return user
}

export default listUsersService