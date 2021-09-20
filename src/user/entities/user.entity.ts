import { Prisma } from '.prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  Nome: string;
  Dtnasci: string;
  Foto: string;
}
