export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const sleep = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 5000);
    });
  };
  await sleep();

  setHeader(event, "Cache-Control", "public,max-age=0,must-revalidate");
  setHeader(
    event,
    "Netlify-CDN-Cache-Control",
    "public, max-age=3600, s-maxage=3600, must-revalidate",
  );

  return {
    api: "Works",
    query,
    param: getRouterParam(event, "param"),
    generatedAt: new Date().toUTCString(),
  };
});
