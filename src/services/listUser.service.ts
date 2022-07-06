import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"
import { IUser } from "../interfaces/user.interfaces";

const listUserService = async (id: string): Promise<IUser> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({id})

    if(!user){
        throw new Error("User not found")
    }

    return user

}

export default listUserService