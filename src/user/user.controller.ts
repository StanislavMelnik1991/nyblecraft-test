import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FormDataRequest } from 'nestjs-form-data';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CreateUserDTO } from './dto/createUser.dto';
import { DeleteUserDTO } from './dto/deleteUser.dto';
import { GetAllUsersDTO } from './dto/getUser.dto';
import { UpdateUserBodyDTO } from './dto/updateUser.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'user creation' })
  @ApiResponse({ status: 200, description: 'user', type: User })
  @FormDataRequest()
  @UsePipes(ValidationPipe)
  @Get()
  getAllUsers(@Query() dto: GetAllUsersDTO) {
    const result = this.userService.getAllUsers(dto);
    return result;
  }

  @ApiOperation({ summary: 'user creation' })
  @ApiResponse({ status: 200, description: 'user', type: User })
  @FormDataRequest()
  @Get('/:id')
  getUser(@Param('id') id: string) {
    if (Number.isNaN(Number(id))) {
      throw new HttpException('param must be number', HttpStatus.BAD_REQUEST);
    }
    const result = this.userService.findOneUserById({ id: Number(id) });
    return result;
  }

  @ApiOperation({ summary: 'user creation' })
  @ApiResponse({ status: 200, description: 'user', type: User })
  @UsePipes(ValidationPipe)
  @FormDataRequest()
  @Post()
  createUser(@Body() dto: CreateUserDTO) {
    const user = this.userService.createUser(dto);
    return user;
  }
  @ApiOperation({ summary: 'user update' })
  @ApiResponse({ status: 200, description: 'user', type: User })
  @UsePipes(ValidationPipe)
  @FormDataRequest()
  @Patch('/:id')
  updateUser(@Body() dto: UpdateUserBodyDTO, @Param('id') id: string) {
    const user = this.userService.updateUser(dto, Number(id));
    return user;
  }

  @ApiOperation({ summary: 'user creation' })
  @UsePipes(ValidationPipe)
  @ApiResponse({ status: 200 })
  @Delete()
  deleteUser(@Body() dto: DeleteUserDTO) {
    const result = this.userService.deleteUser(dto);
    return result;
  }
}
