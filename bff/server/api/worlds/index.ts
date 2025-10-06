export default defineEventHandler(async () => {
  //await useStorage('cache').removeItem(`nitro:functions:listPartners:default.json`)
  return listWorlds().catch(console.error);
})