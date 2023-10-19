export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const sleep = async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(true), 5000);
    });
  };

  await sleep();
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
