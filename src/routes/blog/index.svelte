<script context="module">
  import { browser, dev } from '$app/env';
  import Button from '$lib/components/Button.svelte';
  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;
  export async function load({ fetch }) {
    let articles;

    try {
      // here you should type your dev.to username
      articles = await fetch(`https://dev.to/api/articles?tag=svelte`);
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

<script>
  export let articles;
  // 表示したくない記事ID
  const blackListedArticles = [432439];
  const filteredArticles = articles.filter((article) => !blackListedArticles.includes(article.id));
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="articlesContainer">
  <div class="articles">
    <h1>Svelte Articles</h1>
    {#each filteredArticles as article}
      <div class="article">
        <div class="header">
          <h2>{article.title}</h2>
          <h4>Tags: {article.tags}</h4>
        </div>
        <p>
          {article.description}
        </p>
        <Button link={`/blog/${article.id}`} text={'MORE'} />
      </div>
    {/each}
    {#if filteredArticles.length === 0}
      <div>No Articles</div>
    {/if}
  </div>
</div>
