<script>
  export let link, text
</script>

<div class="button">
  <a href="/{link}">
    <a sveltekit:prefetch href="/{link}">{text}</a>
  </a>
</div>