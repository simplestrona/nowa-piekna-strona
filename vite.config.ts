import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isNetlify = !!process.env.NETLIFY || process.env.NITRO_PRESET === "netlify";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: process.env.NITRO_PRESET ?? (isNetlify ? "netlify" : "cloudflare-module"),
  },
});
