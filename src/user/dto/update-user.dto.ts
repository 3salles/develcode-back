import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  Nome: string;

  @ApiProperty()
  Dtnasci: string;

  @ApiProperty()
  Foto: string;
}
