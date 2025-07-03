export default defineEventHandler((event) => {
  const config = { public: "test" };
  return {
    publicVars: config.public
  };
});
