export default defineEventHandler((event) => {
  const query = getQuery(event);

  return {
    api: "Works - should show previous cached response",
    query,
    generatedAt: new Date().toUTCString(),
  };
});
