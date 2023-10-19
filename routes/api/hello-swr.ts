export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const sleep = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 5000);
    });
  };

  await sleep();

  return {
    api: "Works - should show previous cached response",
    query,
    generatedAt: new Date().toUTCString(),
  };
});
