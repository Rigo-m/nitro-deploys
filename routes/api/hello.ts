export default defineEventHandler((event) => {
  const query = getQuery(event);

  return {
    api: "Works",
    query,
    generatedAt: new Date().toUTCString(),
  };
});
