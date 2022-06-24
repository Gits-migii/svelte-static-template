

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <div class="hdg">
    <h1 class="hdg:1">Svelte Static Site Generator Starter Kit</h1>
    <a href="https://kit.svelte.dev">
      <p>svelte starter kit</p>
    </a>    

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
