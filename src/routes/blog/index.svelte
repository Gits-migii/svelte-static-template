<script context="module">
  import { browser, dev } from '$app/env';
  import Button from "$lib/components/Button.svelte"

    // we don't need any JS on this page, though we'll load
    // it in dev so that we get hot module replacement...
    export const hydrate = dev;

    // ...but if the client-side router is already loaded
    // (i.e. we came here from elsewhere in the app), use it
    export const router = browser;

    // since there's no dynamic data here, we can prerender
    // it so that it gets served as a static asset in prod
    export const prerender = true;    
  // this is runned on load (check svelKit doc)
      export async function load({ fetch }) {
          let articles;
  
          try {
  // here you should type your dev.to username
              articles = await fetch(`https://dev.to/api/articles?username=ladvace`);
              articles = await articles.json();
          } catch (e) {
              console.log(e);
          }
                // you can pass the `articles` via props like that
          return {
              props: {
                  articles
              }
          };
      }
  </script>
  
  // in this second script you are going to declare the articles fetched in the first script and eventually filter them as I did
  <script>
  
      export let articles;
  // here I blacklist some posts adding the id of the post (from the API) in this array 
      const blackListedArticles = [432439];
  
      const filteredArticles = articles.filter((article) => !blackListedArticles.includes(article.id));
  
  </script>

<svelte:head>
  <title>Blog</title>
</svelte:head>  
  
  <div class="articlesContainer">
      <Button link={"about"} text={"hoge"} />
      <div class="articles">
          <h1>Articles</h1>
                   // if you don't need to filter your posts just pass the `articles` instead if `filteredArticles`
          {#each filteredArticles as article}
          // here on click you we are passing the article of the id
              <a href={`/blog/${article.id}`}>
                  <div class="article">
                      <div class="header">
                          <h2>{article.title} </h2>
                          <h4>Tags: {article.tags}</h4>
                      </div>
                      <p>
                          {article.description}
                      </p>
                  </div>
              </a>
  
          {/each}
          {#if filteredArticles.length === 0}
              <div>No Articles</div>
          {/if}
        </div>
    </div>