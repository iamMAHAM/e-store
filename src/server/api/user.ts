export default defineEventHandler(async (event) => {
  const user = await prisma.user;
});