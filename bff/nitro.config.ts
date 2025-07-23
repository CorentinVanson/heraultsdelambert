//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  runtimeConfig: {
    apiToken:"no",
    isProduction: "true",
    sheetCredentialsEmail: "",
    sheetCredentialsPrivateKey: "",
  }
});
