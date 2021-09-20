import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
 
  constructor(private readonly prisma: PrismaService) {}
 
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto
    })

  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        Codigo: id
      }
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        Codigo: id
      },
      data: updateUserDto
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: {
        Codigo: id
      }
    });
  }
}
