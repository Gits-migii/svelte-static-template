<script context="module">
  export const prerender = true;

  export async function load({ params, fetch, session, stuff }) {
    const url = 'https://dev.to/api/articles?tag=svelte&per_page=5&page=1';
    const response = await fetch(url);

    return {
      status: response.status,
      props: {
        article: response.ok && (await response.json())
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
    {articles.length}
</div>
