import { PRODUCT_PER_PAGE } from '~~/src/utils/contants';
import { prisma } from '@@/src/utils/client';

export default defineEventHandler(async (event) => {
  const { page = '1' } = getQuery(event);
  const products = await prisma.product.findMany({
    skip:
      (parseInt((parseInt(page as string) - 1).toString()) || 0) *
      PRODUCT_PER_PAGE,
    take: PRODUCT_PER_PAGE,
  });
  const allDocs = await prisma.product.count();
  return { products, total: allDocs };
});
