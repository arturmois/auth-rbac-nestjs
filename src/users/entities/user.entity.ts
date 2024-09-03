import { $Enums, Prisma } from '@prisma/client';

export class User implements Prisma.UserCreateInput {
  id?: string;
  email: string;
  name: string;
  password: string;
  role: $Enums.Role;
  created_at?: string | Date;
  updated_at?: string | Date;
}
