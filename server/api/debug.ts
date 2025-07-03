export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  return {
    publicVars: config.public
  };
});
