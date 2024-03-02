import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  site: "https://penzionkamelie.cz",
  base: "/",
  integrations: [
    astroI18next(),
    tailwind(),
    react(),
    robotsTxt(),
    sitemap({
      i18n: {
        defaultLocale: "cs", // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
        locales: {
          en: "en", // The `defaultLocale` value must present in `locales` keys
          cs: "cs",
        },
      },
    }),
  ],
});
