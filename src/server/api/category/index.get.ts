import { prisma } from '@@/src/utils/client';

export default defineEventHandler(async (event) => {
  const categories = await prisma.category.findMany();
  return categories;
});
