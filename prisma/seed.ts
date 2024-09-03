import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        email: 'admin@email.com',
        password: await bcrypt.hash('@Abc123', 10),
        name: 'Admin',
        role: 'ADMIN',
      },
      {
        email: 'employee@email.com',
        password: await bcrypt.hash('@Abc123', 10),
        name: 'Employee',
        role: 'EMPLOYEE',
      },
    ]
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
