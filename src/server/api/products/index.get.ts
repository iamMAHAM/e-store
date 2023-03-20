export default defineEventHandler(async (event) => {
  const userId = event.context.params?.id;
  const products = await prisma.product.findMany({
    where: {
      id: userId,
    },
  });
  return {
    status: true,
    message: products,
  };
});
