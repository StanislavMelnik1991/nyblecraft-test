import { CreateUserDTO } from './dto/createUser.dto';
import { DeleteUserDTO } from './dto/deleteUser.dto';
import { GetAllUsersDTO } from './dto/getUser.dto';
import { UpdateUserBodyDTO } from './dto/updateUser.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(dto: GetAllUsersDTO): Promise<{
        users: User[];
        count: number;
    }>;
    getUser(id: string): Promise<User>;
    createUser(dto: CreateUserDTO): Promise<User>;
    updateUser(dto: UpdateUserBodyDTO, id: string): Promise<User>;
    deleteUser(dto: DeleteUserDTO): Promise<string>;
}
