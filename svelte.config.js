import adapter from "@sveltejs/adapter-static"
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from "autoprefixer";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ['src'],
      renderSync:true,
    },
    postcss: {
      plugins:autoprefixer()
    }
  }),
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null
    }),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  }
};

export default config;
