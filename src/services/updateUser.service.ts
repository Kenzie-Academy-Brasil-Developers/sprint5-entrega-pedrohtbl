import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUpdateUser, IUser } from "../interfaces/user.interfaces";
import * as bcrypt from "bcryptjs"

const updateUserService = async (id:string, user: IUpdateUser) => {
    const userRepository = AppDataSource.getRepository(User)

   if(user.password){
        user.password = await bcrypt.hash(user.password, 10)
    }
    
    /* await userRepository.update({id},user)
 */

const newUser = await userRepository.createQueryBuilder()
.update(User)
.set(user)
.where("id = :id", {id})
//.returning('id,name,email,age,created_at,updated_at')
.execute()

const updatedUser = await userRepository.findOneBy({
    id
})
    return {message: updatedUser}
}

export default updateUserService