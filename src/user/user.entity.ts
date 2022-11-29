import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User extends BaseEntity {
  @ApiProperty({ example: '1', description: 'user id', type: 'number' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'JohnSmith@mail.com', description: 'user email' })
  @Column({
    unique: true,
    nullable: false,
  })
  email: string;

  @ApiProperty({ example: 'John', description: 'user name' })
  @Column({ nullable: false })
  firstName: string;

  @ApiProperty({ example: 'Smith', description: 'user last name' })
  @Column({ nullable: false })
  lastName: string;

  @ApiProperty({ example: 'path.jpeg', description: 'image url' })
  @Column({ nullable: true })
  img: string;

  @ApiProperty({ description: 'is pdf created?' })
  @Column({ nullable: false, default: false })
  pdf: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
