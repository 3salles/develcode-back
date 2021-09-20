import { Prisma } from '.prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  name: string;
  birth: string;
  avatar: string;
}
