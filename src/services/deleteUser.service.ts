import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"

const deleteUserService = async (id: string): Promise<void> =>{
    const userRepository = AppDataSource.getRepository(User)

    await userRepository.createQueryBuilder()
    .delete()
    .from(User)
    .where("id = :id", {id})
    .execute()
}

export default deleteUserService