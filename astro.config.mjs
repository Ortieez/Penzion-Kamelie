import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  site: 'https://ortieez.github.io',
  base: '/Penzion-Kamelie',
  integrations: [tailwind(), react()]
});