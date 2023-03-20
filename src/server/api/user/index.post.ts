import { User } from '@prisma/client';

export default defineEventHandler(async (event) => {
  const data: User = await readBody(event);
  const user = await prisma.user.create({
    data: {
      ...data,
    },
  });
  return {
    status: true,
    message: user,
  };
});
