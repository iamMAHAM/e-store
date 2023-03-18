// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  title: "E-store",
  typescript: {
    strict: true,
  },
  srcDir: "src/",
  alias: {
    "@": "/<rootDir>",
    assets: "/<rootDir>/assets",
    public: "/<rootDir>/public",
  },
});
