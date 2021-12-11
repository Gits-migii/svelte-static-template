<script context="module">
  import { browser, dev } from '$app/env';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement...
export const hydrate = dev;

// ...but if the client-side router is already loaded
// (i.e. we came here from elsewhere in the app), use it
export const router = browser;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in prod
export const prerender = true;      
  export async function load({ fetch, page }) {
      let article;

      try {
      // here we are gonna fetch the single article by id
          article = await fetch(`https://dev.to/api/articles/${page.params.slug}`);
          article = await article.json();
      } catch (e) {
          console.log(e);
      }
      return {
          props: {
              article
          }
      };
  }
</script>


<svelte:head>
  <title>{article.title}</title>
</svelte:head>  
  


<script>
  export let article;
</script>

<div class="articleContainer">
  <div class="article">
      <h1>{article.title}</h1>
             // you can "parse" HTML with svelte like that
             // https://svelte.dev/docs#html
      {@html article.body_html}
  </div>
</div>
