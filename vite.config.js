const { resolve } = require("path");
const { defineConfig } = require("vite");
import handlebars from "vite-plugin-handlebars";

import pageData from "./data";

const pages = {};

Object.keys(pageData).map((key) => {
  if (key.includes(".html")) {
    pages[pageData[key].namespace] = resolve(__dirname, key);
  }
});

console.log("pages: ", pages);

module.exports = defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        ...pages,
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "partials"),
      context(pagePath) {
        console.log("page path:", pagePath);
        return { ...pageData[pagePath], ...pageData.globals };
      },
    }),
  ],
});
