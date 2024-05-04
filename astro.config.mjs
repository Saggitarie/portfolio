import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import mkcert from "vite-plugin-mkcert";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
const env = loadEnv("", process.cwd(), "STORYBLOK");


// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      // Add your components here
      page: "storyblok/Page",
      feature: "storyblok/Feature",
      grid: "storyblok/Grid",
      teaser: "storyblok/Teaser"
    },
    apiOptions: {
      // Choose your Storyblok space region
      region: "ap" // optional,  or 'eu' (default)
    }
  }), tailwind()],
  vite: {
    plugins: [mkcert({
      savePath: "./.cert"
    })]
  },
  output: "server",
  adapter: vercel()
});