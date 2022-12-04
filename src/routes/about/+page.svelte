
<script>
  const fetchCats = async function() {
    const items = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
    return await items.json();
  }

  import { Swiper, SwiperSlide } from 'swiper/svelte';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/autoplay'
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="content">
  <h1>this Page is 😺 and each and Swiper and await</h1>

  {#await fetchCats()}
    <p>onLoad</p>
    {:then cats}
    <Swiper
      spaceBetween={50}
      Autoplay
      slidesPerView={1}
    >
      {#each cats as cat}
        <SwiperSlide><img src="{cat.url}" alt=""></SwiperSlide>
      {/each}
    </Swiper>  
  {/await}

</div>

<style lang="scss">
  .content {
    width: 100%;
    max-width: var(--column-width);
    margin: var(--column-margin-top) auto 0 auto;
    span {
      font-size: 12px;
    }

    img {
      width: 100%;
    }
  }
</style>
