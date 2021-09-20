import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsString } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @ApiProperty()
  @IsString()
  Nome: string;

  @ApiProperty()
  @IsString()
  Dtnasci: string;

  @ApiProperty()
  @IsString()
  Foto: string;
}
