export default defineEventHandler((event) => {
  const query = getQuery(event);

  // setHeader(event, "Cache-Control", "public,max-age=0,must-revalidate");
  // setHeader(
  //   event,
  //   "Netlify-CDN-Cache-Control",
  //   "public,max-age=60,must-revalidate",
  // );

  return {
    api: "Works",
    query,
    generatedAt: new Date().toUTCString(),
  };
});
