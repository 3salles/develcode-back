import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  birth: string;

  @ApiProperty()
  @IsString()
  avatar: string;
}
