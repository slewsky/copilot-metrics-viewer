export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  return {
    publicVars: config.public,
    githubBotTokenExists: !!config.githubBotToken,
    gitHubToken: config.githubToken
  };
});
