export default defineEventHandler(async (event) => {
  const userId = event.context.params?.id;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user)
    throw createError({
      statusCode: 404,
      message: 'user not found',
    });
  return {
    status: true,
    message: user,
  };
});
