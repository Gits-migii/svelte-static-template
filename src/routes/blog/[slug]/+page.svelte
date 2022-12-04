

<script>
  export let data;
  $: data
  $: content = data.props.article
</script>
<svelte:head>
  <title>{content.title}</title>
</svelte:head>  



<div class="articleContainer">
  <div class="article">
      <h1>{content.title}</h1>
             // you can "parse" HTML with svelte like that
             // https://svelte.dev/docs#html
      {@html content.body_html}
  </div>
</div>
