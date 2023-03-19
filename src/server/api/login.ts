export default defineEventHandler((event) => {
  console.log('event : ', event);

  return {
    message: 'great',
  };
});
