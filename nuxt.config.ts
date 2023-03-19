// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  title: 'E-store',
  typescript: {
    strict: true,
  },
  srcDir: 'src/',
  alias: {
    '@': '/<rootDir>',
    assets: '/<rootDir>/assets',
    public: '/<rootDir>/public',
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css',
          integrity:
            'sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==',
          crossorigin: 'anonymous',
          referrerpolicy: 'no-referrer',
        },
      ],
    },
  },
  runtimeConfig: {
    MONGO_URL: process.env.DATABASE_URL,
  },
});
