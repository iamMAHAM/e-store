export default defineEventHandler(async (event) => {
  const productId = event.context.params?.id;
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product)
    throw createError({
      statusCode: 404,
      message: 'product not found',
    });
  return {
    status: true,
    message: product,
  };
});
