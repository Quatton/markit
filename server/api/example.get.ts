export default defineEventHandler(async (_event) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const willError = Math.random() > 0.5;

  if (willError) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }

  return {
    message: "Hello World!",
  };
});
