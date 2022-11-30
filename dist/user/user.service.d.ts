import { FilesService } from 'src/files/files.service';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/createUser.dto';
import { DeleteUserDTO } from './dto/deleteUser.dto';
import { GetAllUsersDTO } from './dto/getUser.dto';
import { UpdateUserBodyDTO } from './dto/updateUser.dto';
import { User } from './user.entity';
export declare class UserService {
    private usersRepository;
    private fileService;
    constructor(usersRepository: Repository<User>, fileService: FilesService);
    createUser({ email, firstName, lastName, img }: CreateUserDTO): Promise<User>;
    getAllUsers({ limit, offset }: GetAllUsersDTO): Promise<{
        users: User[];
        count: number;
    }>;
    findOneUserById({ id }: {
        id: number;
    }): Promise<User>;
    findOneUserByEmail(email: string): Promise<User>;
    deleteUser({ email }: DeleteUserDTO): Promise<string>;
    updateUser({ email, firstName, img, lastName }: UpdateUserBodyDTO, id: number): Promise<User>;
}
