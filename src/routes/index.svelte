<script context="module">
  export const prerender = true;
</script>


<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <div class="hdg">
    <h1 class="hdg:1">Svelte Static Site Generator Starter Kit</h1>
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  // hdg:1
  .hdg {
    width: 100%;
    &\:1 {
      font-size: 24px;
    }
  }

</style>
