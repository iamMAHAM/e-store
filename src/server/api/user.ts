import { prisma } from '@@/src/utils/client';

export default defineEventHandler(async (event) => {
  const user = await prisma.user;
});
