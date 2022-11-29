import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class GetAllUsersDTO {
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({ example: '10', description: 'limit users' })
  @IsNumber(
    { allowInfinity: false, allowNaN: false },
    { message: 'must be number' },
  )
  readonly limit: number;

  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({ example: '10', description: 'limit users' })
  @IsNumber(
    { allowInfinity: false, allowNaN: false },
    { message: 'must be number' },
  )
  readonly offset: number;
}
