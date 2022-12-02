import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilesService } from 'src/files/files.service';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/createUser.dto';
import { DeleteUserDTO } from './dto/deleteUser.dto';
import { GetAllUsersDTO } from './dto/getUser.dto';
import { UpdateUserBodyDTO } from './dto/updateUser.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private fileService: FilesService,
  ) {}

  async createUser({ email, firstName, lastName, img }: CreateUserDTO) {
    const duplicate = await this.usersRepository.findOneBy({ email });
    if (duplicate) {
      throw new HttpException(
        'user with this email already exist',
        HttpStatus.NOT_FOUND,
      );
    }
    const savedImage = await this.fileService.createImage(img);
    let user = this.usersRepository.create({
      email,
      firstName,
      lastName,
      img: savedImage,
    });
    user = await this.usersRepository.save(user);
    return user;
  }

  async getAllUsers({ limit, offset }: GetAllUsersDTO) {
    const [users, count] = await this.usersRepository.findAndCount({
      take: limit,
      skip: offset,
      select: { id: true, firstName: true, lastName: true },
    });
    return { users, count };
  }

  async findOneUserById({ id }: { id: number }) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async findOneUserByEmail(email: string) {
    const user = await this.usersRepository.findOneBy({ email });
    if (!user) {
      throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async deleteUser({ email }: DeleteUserDTO) {
    const user = await this.usersRepository.findOneBy({ email: email });
    if (!user) {
      throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    }
    this.fileService.deleteImage(user.img);
    user.remove();
    return 'ok';
  }

  async updateUser(
    { email, firstName, img, lastName }: UpdateUserBodyDTO,
    id: number,
  ) {
    const user = await this.findOneUserById({ id });
    if (firstName) {
      user.firstName = firstName;
    }
    if (email) {
      user.email = email;
    }
    if (img) {
      console.log(user.img);
      await this.fileService.deleteImage(user.img);
      const savedImage = await this.fileService.createImage(img);
      console.log(savedImage);
      user.img = savedImage;
    }
    if (lastName) {
      user.lastName = lastName;
    }
    user.save();
    return user;
  }
}
