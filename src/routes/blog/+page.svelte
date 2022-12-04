

<script>
  export let data;
  import Button from '$lib/components/Button.svelte'
  console.log(data.props.article)
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="articlesContainer">
  <div class="articles">
    <h1>Svelte Articles</h1>
    {#each data.props.article as article}
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
    {#if data.props.article.length === 0}
      <div>No Articles</div>
    {/if}
  </div>
    {data.props.article.length}
</div>
