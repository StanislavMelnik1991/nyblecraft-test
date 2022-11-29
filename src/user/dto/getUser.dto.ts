import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetAllUsersDTO {
  @IsNotEmpty()
  @ApiProperty({ example: '10', description: 'limit users' })
  @IsNumber(
    { allowInfinity: false, allowNaN: false },
    { message: 'must be number' },
  )
  readonly limit: number;

  @IsNotEmpty()
  @ApiProperty({ example: '10', description: 'limit users' })
  @IsNumber(
    { allowInfinity: false, allowNaN: false },
    { message: 'must be number' },
  )
  readonly offset: number;
}
export class GetOneUserDTO {
  @IsNotEmpty()
  @ApiProperty({ example: '10', description: 'user id' })
  @IsNumber(
    { allowInfinity: false, allowNaN: false },
    { message: 'must be number' },
  )
  readonly id: number;
}
