<script context="module">
  import { browser, dev } from '$app/env';
  export const hydrate = dev;
  export const router = browser;

  export const prerender = true;
  export async function load({ fetch, page }) {

      try {
      // here we are gonna fetch the single article by id
          article = await fetch(`https://dev.to/api/articles/${page.params.slug}`);
          const body = await article.json();          
      } catch (e) {
          console.log(e);
      }
      return {
          props: {
            body
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
