import { EntityRepository, Repository } from "typeorm";

import { User } from "../models";

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
    
}

export default UsersRepository