export default defineEventHandler(async () => {
  await useStorage('cache').removeItem(`nitro:functions:listWorlds:default.json`)
  return listWorlds().catch(console.error);
})