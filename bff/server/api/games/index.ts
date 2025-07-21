export default defineEventHandler(async () => {
  //await useStorage('cache').removeItem(`nitro:functions:listGames:default.json`)
  return listGames().catch(console.error);
})