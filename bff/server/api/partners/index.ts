export default defineEventHandler(async () => {
  //await useStorage('cache').removeItem(`nitro:functions:listPartners:default.json`)
  return listPartners().catch(console.error);
})