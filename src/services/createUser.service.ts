import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { ICreateUser, IUser } from "../interfaces/user.interfaces";
import * as bcrypt from "bcryptjs"

const createUserService = async ({name,email,password, age}: ICreateUser) : Promise<IUser>  =>{
    const userRepository = AppDataSource.getRepository(User)

    const userAlreadyExists = await userRepository.findOneBy({
        email
    })

    if(!name || !email || !password || !age){
        throw new Error('error')
    }

    const hashedPassword = await bcrypt.hash(password,10)

    if(userAlreadyExists){
        throw new Error("Email already exists")
    }

    const newUser = userRepository.create({
        name,
        email,
        age, 
        password: hashedPassword
    })

    await userRepository.save(newUser)

    return newUser

}

export default createUserService